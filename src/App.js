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
  <div>
    <h2>Welcome Home</h2>
  </div>
)


const About = () => (
  <div>
    <h2>Welcome To About</h2>

  </div>
)

class Repository extends React.Component {

  constructor(props) {
    super(props);
    this.state = { repo: {} }
  }

  async componentDidMount() {
    const name = this.props.match.params.name;
    const repo = await Facade.getRepo(name)
    this.setState({ repo: repo })
  }
  render() {
    const repo = this.state.repo
    if (repo) {
      return (<div>
        <h2>Repository</h2>
        {/* <p>{JSON.stringify(repo)}</p> */}
        <a><b>Name: </b>{repo.name}</a>
        <br/>
        <a><b>Full Name: </b>{repo.full_name}</a>
        <br/>
        <a><b>Size: </b>{repo.size}</a>
        <br/>
        <a><b>ID: </b>{repo.id}</a>
        <br/>
        <a><b>Default Branch: </b>{repo.default_branch}</a>
        {/* <a>{JSON.stringify(repo)}</a> */}
          <br/>
        <button style={{border:"2px", width:"200px"}}onClick={() => alert(JSON.stringify(repo.owner))}>Owner</button>
        
      </div>
      )
    } else {
      return <div></div>
    }

  }
}

class Repositories extends React.Component {

  constructor(props) {
    super(props);
    this.state = { repos: [] }
  }

  async componentWillMount() {
    var repos = await Facade.getRepos()
    this.setState({ repos })
  }

  render() {
    const match = this.props.match;
    const list = this.state.repos.map((r) => {
      var link = "/repository/" + r.name
      return <li><NavLink to={link}>{r.name}</NavLink></li>
    })
    return (
      <div>
        <h2>Repositories</h2>

        <ul>
          {list}
        </ul>
        {/* <a>{JSON.stringify(this.state.repos)}</a> */}
        <ul>
        </ul>
      </div>
    )
  }
}

const App = () => (
  <Router>
    <div>
      <div>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/repositories">Reposistories</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/repositories" component={Repositories} />
        <Route exact path="/about" component={About} />
        <Route path="/repository/:name" component={Repository} />

      </Switch>
    </div>
  </Router>
)
export default App