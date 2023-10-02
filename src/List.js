import React, { Component } from 'react'
import Item from './Item'
export default class List extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div>
        <ul>
            {/* below tasks is a props and here we render Item */}
            {
                this.props.tasks.map((task) => <Item text={task.text} status={task.status} />)
            }
        </ul>
      </div>
    )
  }
}
