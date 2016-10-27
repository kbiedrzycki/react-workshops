import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Okay we've almost made it, just last exercise to finish this!
 *
 * Last task is to add possibility to filter out only interesting elements.
 * What we basically need to do is to add another input.
 * When user start typing something inside that input, we should leave only that elements which matches value.
 *
 * In previous example we were adding everything to List, let's try different approach and start with
 * creating new Form from the beginning.
 *
 * So, let's create some FilterForm component first.
 *
 * When filter value is changing, we want to trigger some callback which will return that value.
 * We will use it in List component to filter out interesting elements.
 *
 * List component should hold the state about the filter value, so let's add another state to it.
 * When value is passed properly, we can add some filtering to the list.
 *
 * Now we should wonder how we can filter the elements that are rendered on the list.
 * We may modify map function and check, if element passes the filter.
 * To achieve that, we can simply check if some of the characters are present in element name, f.e. with indexOf method.
 *
 * Hint:
 * indexOf returns -1 if occurrence of specified string is not found.
 * Remember that React needs to get something even if we don't want to render anything, even null.
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

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elementName: ''
    };
  }

  handleNameChange(event) {
    this.setState({elementName: event.target.value});
  }

  addElement() {
    this.props.onAddElement(this.state.elementName);
    this.setState({elementName: ''});
  }

  render() {
    return (
      <div>
        Element name:
        <input type="text" value={this.state.elementName} onChange={this.handleNameChange.bind(this)}/>
        <button onClick={this.addElement.bind(this)}>Add element</button>
      </div>
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);

    // copy properties to state
    this.state = {
      elements: props.elements
    }
  };

  renderList() {
    return this.state.elements.map((element, index) => {
      return (
        <li key={index}>
          {element} <a href="#" onClick={() => this.removeElement(index)}>(remove)</a>
        </li>
      );
    });
  }

  removeElement(atIndex) {
    const elements = this.state.elements.slice();
    elements.splice(atIndex, 1);
    this.setState({elements: elements});
  }

  addElement(elementName) {
    const elements = this.state.elements.slice();
    elements.push(elementName);
    this.setState({elements: elements});
  }

  render() {
    return (
      <div>
        <h1>List</h1>
        <ol>
          {this.renderList()}
        </ol>

        <Form onAddElement={(elementName) => this.addElement(elementName)}/>
      </div>
    );
  }
}

ReactDOM.render(
  <List elements={reasons}/>,
  document.getElementById('app')
);
