// A simple state-full component to check preact version of `pixelgrid`

import { h, Component } from 'preact';
/** @jsx h */

import { generateGrid } from '../../helpers/grid-helpers'
import Grid from '../../../packages/pixel-grid-react'

export default class SimpleGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cells: generateGrid(this.props.size)
    }
    const methods = ['updatePixel', 'reset']
    methods.forEach(method => (
      this[method] = this[method].bind(this)
    ))
  }
  reset() {
    this.setState({
      cells: generateGrid(this.props.size)
    })
  }
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
  }
  render() {
    const { size } = this.props
    return (
      <div>
        <h3>Basic grid example ({size}*{size})</h3>
        <Grid
          cells={this.state.cells}
          onCellEvent={this.updatePixel}
        />
        <div style={{ margin: '0.5rem 0 1em' }}>
          <button type="button" onClick={this.reset}>RESET</button>
        </div>
      </div>
    )
  }
}
