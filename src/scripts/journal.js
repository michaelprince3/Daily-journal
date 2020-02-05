import API from './data.js'
import entryMaker from './entriesDOM.js'

API.getJournalEntries().then(entryMaker.renderJournalEntries)

const button = document.getElementById("button")

button.addEventListener("click", () => {
    const entryDate = document.querySelector("#journalDate")
    const entryConcepts = document.querySelector("#concepts")
    const entryText = document.querySelector("#journalEntry")
    const entryMood = document.querySelector("#mood")

    
    const newJournalEntry = {
        journalDate: entryDate.value,
        concepts: entryConcepts.value,
        journalText: entryText.value,
        mood: entryMood.value
    }

    const entryArray = [entryDate, entryConcepts, entryText, entryMood]
    const newArray = []

    entryArray.forEach(entry => {if(entry.value != "") {
        newArray.push(entry)
        return
        
        } else {alert("You missed something!!")}

    })

    
    if(newArray.length === 4){
        API.saveJournalEntry(newJournalEntry)
        .then(() => API.getJournalEntries()
        .then(entryMaker.renderJournalEntries))
    }

    // if(entryDate.value === "" || entryConcepts.value === "" || entryText.value === "" || entryMood.value === ""){
    //     alert("You missed something!!")
    // }else{
    //     API.saveJournalEntry(newJournalEntry)
    //     .then(() => API.getJournalEntries()
    //     .then(entryMaker.renderJournalEntries))
    // }

})
