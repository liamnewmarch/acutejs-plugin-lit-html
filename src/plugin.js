/**
 * Initialises the plugin with a configuration object.
 *
 * @param {object} config Plugin configuration object.
 * @returns {function}
 */
export default ({ render }) => {

  /**
   * Creates a new plugin instance with an Acute component.
   *
   * @param {object} component Acute component.
   * @returns {function}
   */
  return (component) => {

    /**
     * Sets the component’s render strategy to a function.
     *
     * @param {function} fn The render function.
     * @returns {function}
     */
    component.renderStrategy = (fn) => {

      /**
       * Creates a template instance and uses lit-html to render the template
       * instance to the component’s shadow root.
       */
      return () => {
        const templateInstance = fn.call(component, component.props);
        render(templateInstance, component.element.shadowRoot);
      };
    };
  };
};
