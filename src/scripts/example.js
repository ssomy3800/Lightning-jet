class Example {
  constructor(html) {
    this.html = html;
    this.html.innerHTML = "<h1>It is alive!</h1>";
    this.handleClick = this.handleClick.bind(this);
    this.html.addEventListener("click", this.handleClick);
  }

  handleClick() {
    this.html.children[0].innerText = "ouch";
  }
}

export default Example;
