import React from 'react'

import Grid from './Grid'

export default React.createClass({
  getInitialState() {
    const store = this.props.store
    return {
      grid: store.getState().grid,
      dragging: false
    }
  },
  componentDidMount() {
    // subscribe to all state updates
    const store = this.props.store
    store.subscribe(() => {
      this.setState({
        grid: store.getState().grid
      })
    })
    this.update = this.props.onCellEvent
  },
  shouldComponentUpdate(newProps, newState) {
    // Render the grid ONLY if grid array has changed
    // (No rendering if only the `dragging` flag has changed)
    // console.log('Check the grid, different?', newState.grid !== this.state.grid);
    return newState.grid !== this.state.grid
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
        cells={this.state.grid}
        onMouseUp={this.handleMouseUp}
        onMouseDown={this.handleMouseDown}
        onMouseOver={this.handleMouseOver}
      />
    );
  }
})
