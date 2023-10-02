import React, { Component } from 'react'

export default class Reset extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}
