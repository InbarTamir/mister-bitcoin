import './App.scss'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './pages/HomePage'
import { ContactApp } from './pages/ContactApp'
import { Statistic } from './pages/Statistic'
import { ContactEdit } from './pages/ContactEdit'
import { ContactDetails } from './pages/ContactDetails'
import { Signup } from './pages/Signup'
import { userService } from './services/user.service'

export function App() {
  const PrivateRoute = (props) => {
    return userService.getUser() ? <Route component={props.component} path={props.path} /> : <Redirect to="/signup" />
  }
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <Switch>
          <PrivateRoute path="/contact/edit/:id?" component={ ContactEdit } />
          <PrivateRoute path="/contact/:id" component={ ContactDetails } />
          <PrivateRoute path="/contact" component={ ContactApp } />
          <PrivateRoute path="/statistic" component={ Statistic } />
          <Route path="/signup" component={ Signup } />
          <PrivateRoute path="/" component={ HomePage } />
        </Switch>
      </div>
    </Router>
  )
}

