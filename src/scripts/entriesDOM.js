const entryMaker = {
 renderJournalEntries (entries) {
    for (let i = 0; i < entries.length; i++) {
      const entryContainer = document.querySelector(".entryLog");
      console.log(entryContainer);
      entryContainer.innerHTML += HTMLMaker.makeJournalEntryComponent(entries[i]);
    }
  }
}