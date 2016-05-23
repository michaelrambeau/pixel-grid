import React, { Component } from 'react'

import Grid from './Grid'

export default class GridContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dragging: false
    }
    this.update = this.props.onCellEvent.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }
  shouldComponentUpdate(newProps) {
    // Render the grid ONLY if grid array has changed
    // (No rendering if only the `dragging` flag has changed)
    // console.log('Check the grid, different?', newState.grid !== this.state.grid);
    return newProps.cells !== this.props.cells
  }
  handleMouseUp() {
    // Only update the dragging flag, no event triggered
    this.setState({
      dragging: false
    })
  }
  handleMouseDown(id) {
    if (!this.state.dragging) this.update(id)
    this.setState({
      dragging: true
    })
  }
  handleMouseOver(id) {
    if (this.state.dragging) this.update(id)
  }
  render() {
    return (
      <Grid
        cells={this.props.cells}
        onMouseUp={this.handleMouseUp}
        onMouseDown={this.handleMouseDown}
        onMouseOver={this.handleMouseOver}
      />
    )
  }
}
