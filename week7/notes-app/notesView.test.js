/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesView = require('./notesView.js')

describe('add note', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new NotesView();

    const inputEl = document.querySelector("#message-input");
    inputEl.value = 'This is my test message';

    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('This is my test message');
  });
});