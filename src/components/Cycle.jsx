import React, { Component } from 'react';
import './Cycle.css';

class Cycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
    
    if (prevState.count !== this.state.count) {
      console.log("Count has been updated");
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log("Component rendered");
    return (
      <div className='cycleSection'>
        <h1>Current Click: {this.state.count}</h1>
        <button className='cycleBtn' onClick={this.handleClick}>Increment Count</button>
      </div>
    );
  }
}

export default Cycle;