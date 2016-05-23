import { h, render } from 'preact'
/** @jsx h */

import Grid from './preact-grid/examples/TimerGrid'

const App = () => (
  <div>
    <h2>Preact implementation</h2>
    <Grid size={20} />
    <Grid size={32} />
  </div>
)

render(
  <App />,
  document.getElementById('preact-app')
)
