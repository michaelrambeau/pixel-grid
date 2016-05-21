import React from 'react'

import Cell from './Cell'

const Grid = ({ cells, onMouseUp, onMouseDown, onMouseOver }) => (
  <div className="grid-container">
    {cells.map((cell, i) => (
      <Cell
        key={i}
        cell={cell}
        id={i}
        onMouseUp={(id) => onMouseUp(id)}
        onMouseDown={(id) => onMouseDown(id)}
        onMouseOver={(id) => onMouseOver(id)}
      />
    ))}
  </div>
)
export default Grid
