import React from 'react';
import './App.css';
import Container from './components/Container';

class App extends React.Component {
  // constructor
  // this
  render() {
    return (
      <div>
        {/* <div className="header">{this.props.title}</div> */}
        <Container />
      </div>
       );
  }
}

export default App;















// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
