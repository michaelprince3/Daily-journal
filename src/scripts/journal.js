import API from './data.js'
import entryMaker from './entriesDOM.js'

API.getJournalEntries().then(entryMaker.renderJournalEntries)