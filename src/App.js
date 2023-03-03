import './App.css';
import Counter from './components/Counter';
import Cycle from './components/Cycle';
import State from './components/State';
import Sum from './components/Sum';

function App() {
  return (
    <div className="App">

      {/* code written in components folder */}

      {/* 1st question */}
      <Sum/>

      {/* 2nd question */}

      <Cycle/>

      {/* 3rd question */}
      <State/>

      {/* useReducer method (4th question) */}
      <Counter/>     
     
    </div>
  );
}

export default App;
