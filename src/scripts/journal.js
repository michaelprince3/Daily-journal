const getJournalEntries = () => {
  const journalUrl = "http://localhost:3000/entries";
  fetch(journalUrl)
  .then(resp => resp.json())
  .then(entriesFromAPI => {
    renderJournalEntries(entriesFromAPI);

  });
  
}


/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = journalEntry => {
  // Create your own HTML structure for a journal entry
  return `
    <section class="journalEntry">
        <h2>${journalEntry.concepts}</h2>
        <p>${journalEntry.journalText}</p>
        <p>${journalEntry.journalDate}</p>  
    </section>

  `;
};



/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = entries => {
  for (let i = 0; i < entries.length; i++) {
    const entryContainer = document.querySelector(".entryLog");
    console.log(entryContainer);
    entryContainer.innerHTML += makeJournalEntryComponent(entries[i]);
  }
};

getJournalEntries()
// Invoke the render function
// renderJournalEntries(entriesFromAPI);

// journalArray.push(journalEntry);

// journalArray.push(journalEntryOne, journalEntryTwo);

// console.log(journalArray.length);