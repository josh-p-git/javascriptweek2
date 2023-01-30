const NotesModel = require('./notesModel.js')

describe('get notes should return notes', () => {
    const notes = new NotesModel();

    test('returns an empty array', () => {
        expect(notes.getNotes()).toEqual([]);
  });

    test('adds a note', () => {
        notes.addNote(('Buy milk'))
        notes.addNote(('Go to the gym'))
        expect(notes.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

    test('reset removes all notes', () => {
        notes.addNote(('Buy milk'))
        notes.reset()
        expect(notes.getNotes()).toEqual([]);
  });
});