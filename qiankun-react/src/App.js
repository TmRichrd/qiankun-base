import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Users from './Users'

export default function App() {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
      <div>
        这是qiankun-react微应用页面
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
