import ReactDOM from 'react-dom'
import React from 'react'

import SimpleGrid from './examples/SimpleGrid'

const App = () => (
  <div>
    <SimpleGrid size={16} />
    <SimpleGrid size={20} />
    <SimpleGrid size={32} />
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
