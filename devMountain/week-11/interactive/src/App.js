import './App.css';
import Child from './components/Child';
import {useState} from 'react'

function App() {
  const [userInput, setUserInput] = useState ("")
  return (
    <div className="App">
      <input type="text" onChange={(e) => setUserInput(e.target.value)}></input>
      <Child userInput={userInput}/> 
    </div>
  );
}

export default App;
