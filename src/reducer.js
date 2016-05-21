export default function (state, action) {
  const t0 = performance.now();
  if (action.type === 'UPDATE') {
    const i = window._.findIndex(state.grid, (t) => t.id === action.id);
    const updatedCell = Object.assign({}, state.grid[i], {
      color: action.color
    })
    const newState = {
      grid: [].concat(
       state.grid.slice(0, i),
       [updatedCell],
       state.grid.slice(i + 1)
      )
    }
    const t1 = performance.now()
    // console.info('Reducer', (t1 - t0).toFixed(0));
    return newState
  }
  return state
}
