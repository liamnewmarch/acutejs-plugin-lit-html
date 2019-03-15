export default ({ render }) => {
  return (component) => {
    component.renderStrategy = (fn) => {
      return () => {
        render(fn(component.props), component.element.shadowRoot);
      };
    };
  };
};
