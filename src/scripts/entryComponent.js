const HTMLMaker = {
     makeJournalEntryComponent (journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
      <section class="journalEntry">
          <h2>${journalEntry.concepts}</h2>
          <p>${journalEntry.journalText}</p>
          <p>${journalEntry.journalDate}</p>  
      </section>
  
    `;
  }
}