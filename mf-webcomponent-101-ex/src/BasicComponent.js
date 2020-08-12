/**
* Esempio di webcomponent che estende un html element
*/
export default class BasicComponent extends HTMLElement {
   constructor() {
       /**
        * Chiama il costruttore del parent ereditando 
        * quindi tutte le abilità a lavorare
        * sul dom
        */
       super();
   }
}