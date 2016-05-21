import ReactDOM from 'react-dom'
import React from 'react'
import Grid from './core/pixel-grid-react/Grid'

const App = () => (
  <Grid />
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

// Required to avoid `[HMR] The following modules couldn't be hot updated:` error
if (module.hot) {
  module.hot.accept();
}
