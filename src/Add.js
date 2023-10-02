import React, { Component } from 'react'

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            taskText : e.target.value
        })
    }
    handleSubmit = (e) => {
       e.preventDefault();
       if(this.state.taskText == "") {
        alert("cannot add empty task")
        return
       }
       else if(this.props.add(this.state.taskText)) {
        this.setState({taskText : ""})
       }
    }
  render() {
    return (
      <div>
        <h1>Add new Tasks</h1>
        <form onSubmit={this.handleSubmit}>
          <input
             type="text"
             id="item"
             name="item" 
             value={this.state.taskText}
             onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}
