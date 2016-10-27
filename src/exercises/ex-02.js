import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Successfully rendered component in previous exercise?
 * Now let's make things little harder.
 *
 * During presentation, I've mentioned that props can be validated.
 * It helps use to create better components, which are easier to understand and use.
 *
 * In addition, we can also set some default properties, when someone won't pass anything.
 * That might be useful for setting some default class names or styles.
 *
 * In this exercise you can use Hello component created in previous example, just copy&paste the code in lines below.
 *
 * What you need to do is to extend the component with props validation and also with default props values.
 *
 * Let's say our component requires to pass first_name and last_name property.
 * Also it allows to pass email property, which is not required, and if not passed it should equal to: 'email not provided'.
 *
 * When props validation will be set properly, calling component without these props should print a warning
 * inside developers console, so please check that.
 *
 * Hint:
 * React API allows to use plenty of props types, the one that we will be interested in is
 * React.PropTypes.string as we want from our user to pass string values.
 *
 * propTypes and defaultProps are static properties of component, so you need to set them directly
 * on component definition, fe. Hello.propTypes. Configuration that is passed to that properties is
 * just simple JavaScript object, so it should be set as Hello.defaultProps = {key: value, key: value...}
 *
 * To mark property as required, we may use .isRequired property, which should be used somewhere with PropType.
 *
 */

// start here

class Hello extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}

ReactDOM.render(
  <Hello /* remember to pass your props! */ />,
  document.getElementById('app')
);
