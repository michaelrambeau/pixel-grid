import React from 'react'

import { generateGrid } from '../helpers/grid-helpers'
import Grid from '../core/pixel-grid-react'

export default React.createClass({
  getInitialState() {
    return {
      cells: generateGrid(this.props.size)
    }
  },
  reset() {
    this.setState({
      cells: generateGrid(this.props.size)
    })
  },
  updatePixel(i) {
    // console.log('Update pixel', i);
    const state = this.state
    const color = 'rgb(51, 255, 0)'
    const updatedCell = Object.assign({}, state.cells[i], {
      color
    })
    const cells = [].concat(
      state.cells.slice(0, i),
      [updatedCell],
      state.cells.slice(i + 1)
    )
    this.setState(Object.assign({}, this.state, {
      cells
    }))
  },
  render() {
    const { size } = this.props
    return (
      <div>
        <h3>Basic grid example ({size}*{size})</h3>
        <Grid
          cells={this.state.cells}
          onCellEvent={this.updatePixel}
        />
        <div style={{ margin: '1rem 0' }}>
          <button type="button" onClick={this.reset}>RESET</button>
        </div>
      </div>
    );
  }

})
