import React, { Component } from 'react'

import { getCellStyles } from '../../../src/helpers/grid-helpers'

export default class Cell extends Component {
  shouldComponentUpdate(nextProps) {
    const keys = ['color', 'width']
    const isSame = keys.every(key => this.props.cell[key] === nextProps.cell[key])
    return !isSame
  }
  render() {
    const { id, cell: { color, width }, onMouseDown, onMouseUp, onMouseOver } = this.props;
    const styles = getCellStyles(width, color, false)
    return (
      <div
        onMouseDown={() => onMouseDown(id)}
        onMouseUp={() => onMouseUp(id)}
        onMouseOver={() => onMouseOver(id)}
        style={styles}
      />
    )
  }
}
