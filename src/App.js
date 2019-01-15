import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from 'react-router-dom'
import { Grid, Row, Col } from "react-bootstrap"
import Facade from "./facade/Facade"
import GenericTable from './utils/GenericTable';
import Table from "./components/Table"
import Home from "./components/Home"
import Create from "./components/Create"



const App = () => (
  <Router>
    <>
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/table">Table</NavLink></li>
        <li><NavLink exact to="/create">Create</NavLink></li>
        <li style={{ float: "right" }}><NavLink exact to="/login">Log In</NavLink></li>
      </ul>
      <Grid>
        <Row>
          <div style={{ padding: "5px" }}>
            <Switch >
              <Route exact path="/" component={Home} />
              <Route exact path="/table" component={Table} />
              <Route exact path="/create" component={Create} />
            </Switch>
          </div>
        </Row>
      </Grid>
    </>
  </Router>
)
export default App