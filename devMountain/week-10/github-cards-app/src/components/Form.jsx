import React from 'react'

class Form extends React.Component {
    state = { userName: ""};
    handleSubmit = (event) => {
        event.preventDefault();
        // axios.get()
        console.log(this.state.userName)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                value={this.state.userName}
                onChange={event => this.setState({ userName: event.target.value })}
                placeholder="GitHub username"  
                required/>
                <button>Add Card</button>
            </form>
        )
    }
}

export default Form