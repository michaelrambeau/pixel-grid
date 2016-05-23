import { h, Component } from 'preact';
/** @jsx h */

import { generateGrid } from '../../helpers/grid-helpers'
import Grid from '../../../packages/pixel-grid-preact'

export default class SimpleGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cells: generateGrid(this.props.size),
      duration: 0
    }
    const methods = [
      'updatePixel',
      'updateRandomPixel',
      'startTimer',
      'updateDuration',
      'reset'
    ]
    methods.forEach(method => (
      this[method] = this[method].bind(this)
    ))
  }
  reset() {
    this.setState({
      cells: generateGrid(this.props.size),
      duration: 0
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
  updateDuration(duration) {
    this.setState({
      duration,
      cells: this.state.cells
    })
  }
  updateRandomPixel() {
    const length = this.state.cells.length
    this.updatePixel(Math.floor(Math.random() * length))
  }
  startTimer() {
    const length = this.state.cells.length
    const t0 = performance.now()
    this.reset()
    // console.log('Start timer!')
    const self = this
    let n = 0
    const tick = () => {
      setTimeout(() => {
        self.updatePixel(n)
        n++
        if (n < length) {
          tick()
        } else {
          const t1 = performance.now()
          const duration = (t1 - t0) / 1000
          // console.log('The end!', duration.toFixed(1), 'seconds')
          self.updateDuration(duration)
        }
      }, 0)
    }
    tick()
  }
  render() {
    const { size } = this.props
    const { duration } = this.state
    return (
      <div>
        <h3>{size}*{size}</h3>
        <Grid
          cells={this.state.cells}
          onCellEvent={this.updatePixel}
        />
        <div style={{ margin: '0.5rem 0 1em' }}>
          <button type="button" onClick={this.startTimer}>START</button>
          <button type="button" onClick={this.reset}>RESET</button>
          {duration > 0 && (
            <span className="duration">
              {this.state.duration.toFixed(1)}{' s.'}
            </span>
          )}
        </div>
      </div>
    )
  }
}
