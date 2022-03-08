import React, { Component } from 'react'

export default class Blue extends Component {
    
constructor() {
    super()
    this.state = {
        dog: 'dog'
    }
}
    // how to declare functions


  render() {
    //   how to write javaScript in the return statement
    // the return statement is JSX 
    // in order to escape JSX and use javaScript, use {}
    return (
      <div>{this.state.dog.length}</div>
    )
  }
}

