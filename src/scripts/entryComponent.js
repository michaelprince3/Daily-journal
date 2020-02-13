const HTMLMaker = {
  makeJournalEntryComponent(journalEntry) {
    return `
      <section class="journalEntry">
          <h2>${journalEntry.concepts}</h2>
          <p>${journalEntry.journalText}</p>
          <p>${journalEntry.journalDate}</p>
          <button id="deleteBtn--${journalEntry.id}">Delete</button>
          <button id="editBtn--${journalEntry.id}">Edit</button>           
      </section>  
    `;
  }
};

export default HTMLMaker;
