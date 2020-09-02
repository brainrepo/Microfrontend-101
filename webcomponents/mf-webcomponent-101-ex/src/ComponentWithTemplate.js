
export default class WithTemplate extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('component-with-template');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
    }
  }
