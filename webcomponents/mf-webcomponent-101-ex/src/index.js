import BasicComponent from './BasicComponent';
import ComponentLifecycle from './ComponentLifecycle';
import ComponentWithShadowDom from './ComponentWithShadowDom';
import ComponentWithTemplate from './ComponentWithTemplate';

/**
 * Istruisco il browser a trattare elementi di tipo word-count
 * word-count è in kebab case perché i nomi con una sola parola sono
 * riservati al browser
 */
customElements.define('basic-component', BasicComponent);
customElements.define('component-lifecycle', ComponentLifecycle);
customElements.define('component-shadow-dom', ComponentWithShadowDom);
customElements.define('component-with-template', ComponentWithTemplate);

