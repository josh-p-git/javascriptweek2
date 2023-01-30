class NotesModel {
    constructor(notes) {
    this.notes = []
    }
    
    getNotes() {
        return this.notes;
    }

    addNote(note) {
        this.notes.push(note);
    }

    reset() {
        this.notes = [];
    }
}

module.exports = NotesModel;