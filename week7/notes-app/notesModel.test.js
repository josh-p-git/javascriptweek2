const NotesModel = require('./notesModel.js')

describe('get notes should return notes', () => {
    const notes = new NotesModel();

    test('returns an empty array', () => {
        expect(notes.getNotes()).toEqual([]);
  });
});