const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries").then(response =>
      response.json()
    );
  },

  saveJournalEntry(entry) {
    return fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },

  deleteJournalEntry(entryId) {
    return fetch(`http://localhost:3000/entries/${entryId}`, {
      method: "DELETE"
    });
  },

  editJournalEntry(entryId) {
    return fetch(`http://localhost:3000/entries/${entryId.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entryId)
    });
  }
};

export default API;
