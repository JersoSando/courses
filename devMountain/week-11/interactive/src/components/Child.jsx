// import React, {Component}from 'react'

// class Child extends Component {
//     constructor() {
//         super()

//         this.state = {
//             userInput: ""
//         }
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <hi>Child COmponent</hi>
//                 <h2>{this.state.userInput}</h2>
//                 <input type='text' onChange={(e) => this.setState({userInput: e.target.value})}></input>
//             </React.Fragment>
//         )
//     }
// }

// export default Child 
import React from 'react'
function Child(props) {
  return (
    <React.Fragment>
        <h1>Child Component</h1>
        <h2> Value: {props.userInput}</h2>
    </React.Fragment>
  )
}

export default Child