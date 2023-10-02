import React, { Component } from 'react'
import Add from './Add'
import List from './List'
import Reset from './Reset'

export default class App extends Component {
  constructor() {
    super();
    this.state={
      tasks: [{ "text" : "sabzi" , "status" : "incomplete"},
      { "text" : "pampers" , "status" : "incomplete"},
      { "text" : "Tamatar" , "status" : "incomplete"},
      { "text" : "Shimla mirch" , "status" : "complete"},
      { "text" : "Nothing special" , "status" : "incomplete"},
    ]
    }
  }
  addTask = (text) => {
    this.setState({
        tasks: this.state.tasks.concat({ "text": text, "status": "incomplete" })
    })
    return true;
}
removeTask = (text) => {
  this.setState({ tasks: this.state.tasks.filter(task => task.text !== text) })
}
reset = () => {
  this.setState({ tasks: [] })
}

changeStatus = (text) => {
  // const index = this.state.tasks.findIndex(task => task.text === text)
  // this.setState({
  //     tasks: this.state.tasks[index].status
  // })
  const newList = this.state.tasks.map(task => {
      if (task.text === text) {
          return { text, status: task.status === "incomplete" ? "complete" : "incomplete" }
      }
      return task;
  })
  this.setState({
      tasks: newList
  })
}

  render() {
    return (
      <div>
        <h1>Total Tasks: {this.state.tasks.length}</h1>
        <h1>Complete:{this.state.tasks.filter((task) => task.status == "complete").length}</h1>
        <h1>Incomplete:{this.state.tasks.filter((task) => task.status == "incomplete").length}</h1>
        <Add add={this.addTask}/>
        <List tasks={this.state.tasks} changeStatus={this.changeStatus} />
        <Reset reset={this.reset} />
      </div>
    )
  }
}
