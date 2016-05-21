import React from 'react'

import Grid from './Grid'

export default React.createClass({
  getInitialState() {
    return {
      dragging: false
    }
  },
  componentDidMount() {
    this.update = this.props.onCellEvent
  },
  shouldComponentUpdate(newProps) {
    // Render the grid ONLY if grid array has changed
    // (No rendering if only the `dragging` flag has changed)
    // console.log('Check the grid, different?', newState.grid !== this.state.grid);
    return newProps.cells !== this.props.cells
  },
  handleMouseUp() {
    // Only update the dragging flag, no event triggered
    this.setState({
      dragging: false
    })
  },
  handleMouseDown(id) {
    if (!this.state.dragging) this.update(id)
    this.setState({
      dragging: true
    })
  },
  handleMouseOver(id) {
    if (this.state.dragging) this.update(id)
  },
  render() {
    // console.info('Render <App>', this.state);
    return (
      <Grid
        cells={this.props.cells}
        onMouseUp={this.handleMouseUp}
        onMouseDown={this.handleMouseDown}
        onMouseOver={this.handleMouseOver}
      />
    );
  }
})
