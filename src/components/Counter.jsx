import React, { useReducer } from 'react';
import './Counter.css';

function reducer(state, action) {
  switch (action.type) {
    case 'handleIncrement':
      return { count: state.count + 1 };
    case 'handleDecreament':
      return { count: state.count - 1 };
    case 'handleReset':
      return { count: 0 };
    default:
      throw new Error();
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className='Holder'>
      <p
        onMouseOver={() => dispatch({ type: 'handleIncrement' })}
        onClick={() => dispatch({ type: 'handleDecreament' })}
      >
        Hover on me to increment count, click text to decrement count.
      </p>
      <button className='resetBtn' onClick={() => dispatch({ type: 'handleReset' })}>Reset</button>
      <p>Count: {state.count}</p>
    </div>
  );
}

export default Counter;