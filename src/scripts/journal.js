const journalArray = [
  {
    journalDate: "2020-1-17",
    concepts: "Javascript objects and functions",
    journalText:
      "Today we learned about Javascript functions and objects, how to use them togther as well as how to apply them to our sites.",
    mood: "fine"
  },

  {
    journalDate: "2020-1-10",
    concepts: "HTML",
    journalText: "Today we learned HTML and how to implement it into a website",
    mood: "happy"
  },

  {
    journalDate: "2020-1-10",
    concepts: "HTML",
    journalText: "Today we learned HTML and how to implement it into a website",
    mood: "happy"
  },

  {
    journalDate: "2020-1-11",
    concepts: "CSS",
    journalText: "Today we learned CSS and how to use it to style a web page.",
    mood: "sad"
  }
];

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
// Invoke the render function
renderJournalEntries(journalArray);

// journalArray.push(journalEntry);

// journalArray.push(journalEntryOne, journalEntryTwo);

// console.log(journalArray.length);