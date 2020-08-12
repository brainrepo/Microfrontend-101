export default class ComponentWithShadowDom extends HTMLElement{
    constructor(){
        super();


        /**
         * Creo lo shadow root
         */
        var shadow = this.attachShadow({mode: 'open'});

        /**
         * Creo vari spans
         */
        var wrapper = document.createElement('span');
        wrapper.setAttribute('class','wrapper');
        var info = document.createElement('span');
        info.setAttribute('class','info');

        // Take attribute content and put it inside the info span
        var text = this.getAttribute('text');
        info.textContent = text;


        // Create some CSS to apply to the shadow dom
        var style = document.createElement('style');

        style.textContent = `.wrapper{
            color: red;
            font-weight: bold;
            border: 1px solid red;
        }`

        // attach the created elements to the shadow dom
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(info);

    }
    
}
