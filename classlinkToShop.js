export class _LinkToShop {
  constructor(idHtml, src) {
    this.idHtml = idHtml;
    this.src = src;
    this.addLink();
  }
  addLink() {
    let a = document.getElementById(this.idHtml);
    let link = document.createElement("a");
    link.setAttribute("href", this.src);
    link.style.textDecoration = "none";
    link.style.color = "rgb(255, 255, 255)";
    link.style.backgroundColor = "black";
    link.style.borderRadius = "30px";
    link.style.padding = "10px";
    link.textContent = "SHOP NOW";
    a.appendChild(link);
  }
}
