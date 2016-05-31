// Return an array of cells
export function generateGrid(pxNumber = 20) {
  const cells = []
  for (let i = 0; i < pxNumber * pxNumber; i++) {
    cells.push({
      width: 100 / pxNumber,
      color: 'rgb(49, 49, 49)',
      id: i
    })
  }
  return cells
}

// Return the inline cells applied to a grid cell
// used in `Cell.jsx` components (React and preact)
export function getCellStyles(width, color, flex) {
  const flexStyles = {
    flex: `0 0 ${width}%`,
  }
  const floatStyles = {
    width: `${width}%`,
    paddingBottom: `${width}%`,
  }
  const styles = flex ? flexStyles : floatStyles
  styles.backgroundColor = color
  return styles
}
