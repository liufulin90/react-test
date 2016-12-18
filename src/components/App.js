import React from 'react'
import NavBar from './NavBar/'

let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('./DevTools').default
}

const App = ({children, location}) => (
  <div>
    <NavBar />
    <div className="container">
      {children}
    </div>

    { DevTools && <DevTools /> }
  </div>
)

export default App
