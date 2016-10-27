import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Your task in this exercise is to create simple HTML input which can handle data provided by user and display
 * it dynamically when value is being changed.
 *
 * For example it can be rendered as
 * <div>
 *   <input ... />
 *   <div>You have typed: {what_was_typed}</div>
 * </div>
 *
 * Why we wrapped component in <div> tag? Remember that React can only return single element, so if
 * we have multiple elements inside, we need to wrap them up in something.
 *
 * Because React use single-way data binding, we need to use internal state property to handle those changes.
 *
 * Hint:
 * Remember that each state change causes React to rerender component, that might be useful information here.
 * Try to remember where you can set initial state -> constr..?
 * What is important? We need to listen to user input, so we need to attach some event handler on input element,
 * maybe onChange?
 *
 * When attaching events to elements, remember that callback won't be automatically bound to class context!
 * This is important, because in this exercise we will update state inside callback, which is class property.
 *
 * You probably wonder how to get input value? When attaching event handler, callback receives parameter which
 * is exactly that event which was called. Each event contains target property, which is basically HTML
 * element on which event was triggered. Simply access value property of that element to get user input.
 *
 */

// start here

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input /* what should be value of input? */ value="" /* any change handlers? */ />
        <div>You have typed: </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Input />,
  document.getElementById('app')
);
