import HTMLMaker from "./entryComponent.js";

const entryMaker = {
  renderJournalEntries(entries) {
    const entryContainer = document.querySelector(".entryLog");
    entryContainer.innerHTML = "";
    for (let i = 0; i < entries.length; i++) {
      entryContainer.innerHTML += HTMLMaker.makeJournalEntryComponent(
        entries[i]
      );
    }
  },

   updateJournalEntries (journalId) {
    const hiddenJournalId = document.querySelector("#journalId")
    const entryDate = document.querySelector("#journalDate");
    const entryConcepts = document.querySelector("#concepts");
    const entryText = document.querySelector("#journalEntry");
    const entryMood = document.querySelector("#mood");
  
    fetch(`http://localhost:3000/entries/${journalId}`)
        .then(response => response.json())
        .then(entry => {
           hiddenJournalId.value = entry.id // Hidden value. User no see. 🙈
           entryDate.value = entry.journalDate
           entryConcepts.value = entry.concepts
           entryText.value = entry.journalText
           entryMood.value = entry.mood
        })
  }
};

export default entryMaker;
