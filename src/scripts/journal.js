const journalEntry = {
  journalDate: 1 / 17 / 2020,
  concepts: "Javascript objects and functions",
  journalText:
    "Today we learned about Javascript functions and objects, how to use them togther as well as how to apply them to our sites.",
  mood: "fine"
};

const journalArray = [

];
 
journalArray.push(journalEntry);

const journalEntryOne = {
    journalDate: 1/10/2020,
    concepts: "HTML",
    journalText: "Today we learned HTML and how to implement it into a website",
    mood: "happy"
};

const journalEntryTwo = {
    journalDate: 1/11/2020,
    concepts: "CSS",
    journalText: "Today we learned CSS and how to use it to style a web page.",
    mood: "sad"
};

journalArray.push(journalEntryOne, journalEntryTwo);

console.log(journalArray.length);