import React from 'react';
import ReactDOM from 'react-dom';

/**
 * This exercise will help you to understand how state and lifecycle methods can be connected.
 * At first, try to create component that will display current time as locale string.
 *
 * To get current date simply create new date object by calling "new Date".
 * Keep in mind that we will update that value over time, so, we should keep that value in component's state.
 *
 * Component should just render current time as string.
 * You may think yeah sure, I've got whole Date API in my head.. no, I don't require that,
 * go to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
 *
 * When your component can render current time, we should add some interactivity, right?
 * We need clock that tics!
 *
 * How we can do that?
 *
 * For sure, we need to somehow update current state, right?
 * What should be the "interval" that clock should update?
 *
 * In JavaScript, there are functions that are called Timing Functions.
 * One of those is setInterval method which allows to call some method repeatedly, with a fixed time delay between each call.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval
 *
 * It sounds that we found a candidate that will update our time!
 *
 * Second thing is where we should call that method, right?
 * The hint is - lifecycle hooks. I think a perfect candidate for that is callback, that is being called right after
 * component is being mounted.
 *
 * One more thing - remember to cleanup after yourself. When component will be unmounted from DOM, we should
 * remove all event listeners, React won't do that for us.
 *
 * setInterval method, when called, is returning intervalID. That value can be used to clear interval, by simply
 * calling clearInterval(intervalID).
 *
 * Hint:
 * Component mounting can be detected in componentDidMount callback, for unmounting we should use method
 * called componentWillUnmount.
 *
 * Extra task:
 *
 * #1
 *
 * Allow TicToc component to receive timezone property which should affect displayed time.
 * As examples we can use New York timezone: 'America/New_York' and Hong Kong: 'Asia/Hong_Kong'.
 *
 * For more information about setting timezone use Mozilla docs mentioned at beginning.
 *
 * #2
 *
 * Remember about components composition? Try to create component that will return current time in New York
 * without passing properties to that component.
 *
 */

// start here

class TicToc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>Current time: </div>
    );
  }
}

ReactDOM.render(
  <TicToc />,
  document.getElementById('app')
);
