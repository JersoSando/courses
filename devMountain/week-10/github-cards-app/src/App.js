import React from 'react';
import './App.css';
import Container from './components/Container';

class App extends React.Component {
  // constructor
  // this
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Container />
      </div>
       );
  }
}

export default App;
