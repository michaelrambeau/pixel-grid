export function generateGrid(pxNumber = 20) {
  return window._.times(pxNumber * pxNumber, (i) => ({
    width: 100 / pxNumber,
    color: 'rgb(49, 49, 49)',
    id: i
  }));
}
