import API from "./data.js";
import entryMaker from "./entriesDOM.js";
import modifyJournalEvents from "./entryEvents.js";
import searchEntries from "./searchEntries.js";

API.getJournalEntries().then(entryMaker.renderJournalEntries);

modifyJournalEvents.addEntry()

modifyJournalEvents.sortEntries()

modifyJournalEvents.changeEntries()

searchEntries.searchJournalEntries()

