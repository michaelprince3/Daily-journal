import API from "./data.js";
import entryMaker from "./entriesDOM.js";


const modifyJournalEvents = {
  addEntry() {
    const recButton = document.getElementById("button");

    recButton.addEventListener("click", () => {
      const hiddenJournalId = document.querySelector("#journalId")
      const entryDate = document.querySelector("#journalDate");
      const entryConcepts = document.querySelector("#concepts");
      const entryText = document.querySelector("#journalEntry");
      const entryMood = document.querySelector("#mood");

      const newJournalEntry = {
        journalDate: entryDate.value,
        concepts: entryConcepts.value,
        journalText: entryText.value,
        mood: entryMood.value
      };

      const clearForm = () => {
          hiddenJournalId.value = ""
          entryDate.value = ""
          entryConcepts.value = ""
          entryText.value = ""
          entryMood.value = ""
      }

      const entryArray = [entryDate, entryConcepts, entryText, entryMood];
      const newArray = [];

      entryArray.forEach(entry => {
        if (entry.value != "") {
          newArray.push(entry);
          return;
        } else {
          alert("You missed something!!");
        }
      });

      if (newArray.length === 4 && hiddenJournalId.value !== "") {
          newJournalEntry.id = parseInt(hiddenJournalId.value)
          API.editJournalEntry(newJournalEntry)
          .then(() => 
          API.getJournalEntries()
          .then(entryMaker.renderJournalEntries))
          .then(clearForm)
      } else if (newArray.length === 4) {
        API.saveJournalEntry(newJournalEntry)
        .then(() =>
          API.getJournalEntries()
          .then(entryMaker.renderJournalEntries)
          .then(clearForm)
        );
      }
      // another way to make this work still evaluating which i like better
      // if(entryDate.value === "" || entryConcepts.value === "" || entryText.value === "" || entryMood.value === ""){
      //     alert("You missed something!!")
      // }else{
      //     API.saveJournalEntry(newJournalEntry)
      //     .then(() => API.getJournalEntries()
      //     .then(entryMaker.renderJournalEntries))
      // }
    });
  },

//   sort function for sorting by mood
  sortEntries() {
    const radioButtons = document.getElementsByName("radioButton");

    radioButtons.forEach(radioButton =>
      radioButton.addEventListener("click", event => {
        const btnMood = event.target.value;
        if (btnMood === "all") {
          API.getJournalEntries().then(entryMaker.renderJournalEntries);
        } else {
          API.getJournalEntries().then(entries => {
            const filteredEntries = entries.filter(
              entry => entry.mood === btnMood
            );
            entryMaker.renderJournalEntries(filteredEntries);
          });
        }
      })
    );
  },

//   Edit function to edit an existing entry
  changeEntries() {
    const listenToEntries = document.querySelector(".entryLog");

    listenToEntries.addEventListener("click", () => {
      if (event.target.id.startsWith("deleteBtn--")) {
        const deleteButtonId = event.target.id;
        const deleteArray = deleteButtonId.split("--");
        const deleteId = deleteArray[1];
        API.deleteJournalEntry(deleteId).then(() =>
          API.getJournalEntries().then(entryMaker.renderJournalEntries)
        );
      } else if (event.target.id.startsWith("editBtn--")) {
        const editButtonId = event.target.id;
        const editArray = editButtonId.split("--");
        const editId = editArray[1];
        entryMaker.updateJournalEntries(editId);
      }
    })
  }
}

export default modifyJournalEvents;
