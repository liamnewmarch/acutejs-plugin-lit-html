/**
 * Initialises the plugin with a configuration object.
 *
 * @param {object} config Plugin configuration object.
 * @return {function}
 */
export default function({ render }) {
  /**
   * Creates a new plugin instance with an Acute component.
   *
   * @param {object} component Acute component.
   */
  return function(component) {
    /**
     * Sets the component’s render strategy to a function.
     *
     * @param {function} fn The render function.
     * @return {function}
     */
    component.renderStrategy = function(fn) {
      /**
       * Creates a template instance and uses lit-html to render the template
       * instance to the component’s shadow root.
       */
      return function() {
        const templateInstance = fn.call(component, component.element);
        render(templateInstance, component.element.shadowRoot);
      };
    };
  };
}
