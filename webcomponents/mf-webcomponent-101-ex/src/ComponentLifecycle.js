export default class CustomParagraph extends HTMLParagraphElement{
    constructor(){
        super();
    }

    static get observedAttributes() {
        return ['c'];
    }

    connectedCallback() {
        this.updateStyle("red");
        this.setAttribute('c', 'red')
    }

    disconnectedCallback() {
        console.log("Elemento rimosso dalla pagina")
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.updateStyle(newVal);
    }

    updateStyle(color) {
        this.style.color = color;
    }
}
