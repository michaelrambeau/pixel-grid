import ReactDOM from 'react-dom'
import React from 'react'

import TimerGrid from './react-grid/examples/TimerGrid'

const ReactApp = () => (
  <div>
    <h2>React implementation</h2>
    <TimerGrid size={20} />
    <TimerGrid size={32} />
  </div>
)

ReactDOM.render(
  <ReactApp />,
  document.getElementById('react-app')
)

// Required to avoid `[HMR] The following modules couldn't be hot updated:` error
if (module.hot) {
  module.hot.accept();
}
