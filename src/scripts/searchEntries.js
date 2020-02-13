import API from "./data.js";
import entryMaker from "./entriesDOM.js";

const searchEntries = {
  searchJournalEntries() {
    const searchBox = document.querySelector(".searchBar");
    const searchResults = [];

    searchBox.addEventListener("keydown", event => {
      const keyName = event.key;
      const searchCriteria = event.target.value;
      searchResults.length = 0;
      if (keyName === "Enter") {
        API.getJournalEntries()
          .then(entries => {
            entries.forEach(entry => {
              for (const value of Object.values(entry)) {
                if (value.split !== undefined) {
                  const searchArray = value.split(" ");
                  if (searchArray.includes(`${searchCriteria}`)) {
                    searchResults.push(entry);
                  }
                }
              }
            });
          })
          .then(() => {
            entryMaker.renderJournalEntries(searchResults);
          });
      }
    });
  }
};

export default searchEntries;
