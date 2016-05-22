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
