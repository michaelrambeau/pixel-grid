import ReactDOM from 'react-dom'
import React from 'react'

import SimpleGrid from './examples/SimpleGrid'
import TimerGrid from './examples/TimerGrid'

const App = () => (
  <div>
    <TimerGrid size={10} />
    <TimerGrid size={16} />
    <TimerGrid size={20} />
    <TimerGrid size={32} />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

// Required to avoid `[HMR] The following modules couldn't be hot updated:` error
if (module.hot) {
  module.hot.accept();
}
