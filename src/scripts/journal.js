import API from "./data.js";
import entryMaker from "./entriesDOM.js";
import modifyJournalEvents from "./entryEvents.js";

API.getJournalEntries().then(entryMaker.renderJournalEntries);

modifyJournalEvents.addEntry()

modifyJournalEvents.sortEntries()

modifyJournalEvents.changeEntries()

