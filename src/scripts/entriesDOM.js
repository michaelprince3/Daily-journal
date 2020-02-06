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
  }
};

export default entryMaker;