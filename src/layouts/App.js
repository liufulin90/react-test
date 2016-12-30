import React from 'react'
import NavBar from './Nav/'
import './App.css'

let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('../components/DevTools').default
}

const App = ({children, location}) => (
  <div>
    <section>
      <NavBar />
    </section>
    <section>
      <div className="container">
        {children}
      </div>
    </section>
    { DevTools && <DevTools /> }
  </div>
)

export default App
