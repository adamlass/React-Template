import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from 'react-router-dom'

import Facade from "./facade/Facade"

const Home = () => (
  <h1>Home</h1>
)

const App = () => (
  <Router>
    <div>
      <div>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li style={{float:"right"}}><NavLink exact to="/login">Log In</NavLink></li>
        </ul>
      </div>
      <div style={{ padding: "5px" }}>
        <Switch >
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  </Router>
)
export default App