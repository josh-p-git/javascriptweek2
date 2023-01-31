class NotesView {
    constructor() {
        this.buttonEl = document.querySelector('#add-note-button');
        this.buttonEl.addEventListener('click', () => {
            this.addNote();
        }); 
    }
    
    getNotes() {

    }

    addNote() {
        const messageInput = document.querySelector('#message-input').value;

        let note = document.createElement("div");
        note.id = 'message';
        note.innerText = messageInput;
        document.querySelector('#main-container').append(note);
    }

    reset() {
        this.notes = [];
    }
}

module.exports = NotesView;