import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () =>
    <div>
        <NavLink to="/" style={link} >Home</NavLink>
        <NavLink to="/about" style={link} >About</NavLink>
        <NavLink to="/login" style={link} >Login</NavLink>
    </div>

const Home = () => <h1>Home!</h1>

const About = () => <h1>About</h1>

const Login = () =>
    <form>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username"/>
        </div>

        <div>
            <label htmlFor="username">Password</label>
            <input type="password" name="password" placeholder="password"/>
        </div>

        <div>
            <input type="submit" value="Login" />
        </div>
    </form>

ReactDOM.render(
  (<Router>
      <Fragment>
          <NavBar />
          <Route exact path="/" render={Home} />
          <Route path="/about" render={About} />
          <Route path="/login" render={Login} />
      </Fragment>
  </Router>),
  document.getElementById('root')
)
