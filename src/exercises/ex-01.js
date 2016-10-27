import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Remember how to create components?
 * There are two ways to achieve that: functional and class components.
 *
 * At first, try to create simple functional component called Hello.
 * Next thing, try to convert functional Hello component to class component with the same name.
 *
 * Component should return <h1> tag which should contain some text and JSX expression,
 * for example Hello, {something}
 *
 * Hints:
 * React is offering Component which needs to be extended when creating class component.
 * Remember to use class keyword when creating component.
 *
 * Functional components are creating like normal function, it can take one argument which are basically component's props.
 *
 * Remember that when using class component properties are hidden under this.props, when functional - they are passed as function argument.
 *
 */

// start here


ReactDOM.render(
  <Hello /* remember to pass your props! */ />,
  document.getElementById('app')
);
