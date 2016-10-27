import React from 'react';
import ReactDOM from 'react-dom';

/**
 * This task is prepared, to learn you how to render list of multiple elements, when you have some collection of data.
 * I've already prepared some example collection, which can be accessed under 'reasons' variable.
 *
 * At first, pass list of elements as property of List component. We've done similar things, right?
 * Next, your task is to display ordered <ol> list of elements, just by iterating over them.
 *
 * Hint:
 * To iterate over list of elements, and for example, to wrap each of the element on the list with some
 * additional data, we can use .map method available in JavaScript.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * Extra task:
 *
 * #1
 *
 * Look at developer console. When rendering list of elements, without unique key for each element
 * you will receive warning. Try to solve that problem.
 *
 */

// start here
const reasons = [
  'Applicable under EC261 (or DOT) regulation',
  'No strike',
  'Flight disrupted or missed connection',
  'Airport report showing no disruption',
  'Operating airline checked',
  'Tried to retreive e-ticket',
  'Itinerary confirmed/ legs added (if relevant)',
  'Booking ref. checked (if relevant)/ Correct AF received',
  'All required documents received (if relevant)',
  'Documents named and uploaded',
  'The amount of compensation is correct'
];

class List extends React.Component {
  renderList() {
    // add code that will return list of elements, each wrapped with <li> element
  }

  render() {
    return (
      <ol>
        {this.renderList()}
      </ol>
    );
  }
}

ReactDOM.render(
  <List />,
  document.getElementById('app')
);
