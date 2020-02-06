const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },

    saveJournalEntry (entry) {
        return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry),
        })
    },
// part of journal 9
    // deleteJournalEntry (entryId) {
    //     return fetch(`http://localhost:3000/entries/${entryId}`, {
    //         method: "DELETE"
    //     })
    // }    
}

export default API