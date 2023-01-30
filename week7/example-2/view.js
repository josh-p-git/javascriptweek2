class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    let paragraph = document.createElement("p");
    paragraph.append("This paragraph has been dynamically added by JavaScript!");
    this.mainContainerEl.append(paragraph);
  }

  clearParagraphs() {
    const p = document.querySelectorAll("p");
    p.forEach(para => {
      para.remove();
    })
  }
}

module.exports = View;