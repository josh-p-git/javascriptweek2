class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.buttonHide = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
     });

     this.buttonHide.addEventListener('click', () => {
      this.hideMessage();  
     }); 
  }

  displayMessage() {
    console.log('Thanks for clicking me!');

    const messageInput = document.querySelector('#message-input').value;

    let note = document.createElement("div");
    note.id = 'message';
    note.innerText = messageInput;
    document.querySelector('#main-container').append(note);
  }

  hideMessage() {
    let note = document.getElementById("message");
    note.remove();
  }
}

module.exports = MessageView;