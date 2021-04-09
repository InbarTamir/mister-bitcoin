import './App.scss'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './pages/HomePage'
import { ContactApp } from './pages/ContactApp'
import { Statistic } from './pages/Statistic'
import { ContactEdit } from './pages/ContactEdit'
import { ContactDetails } from './pages/ContactDetails'

export function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <Switch>
          <Route path="/contact/edit/:id?" component={ ContactEdit } />
          <Route path="/contact/:id" component={ ContactDetails } />
          <Route path="/contact" component={ ContactApp } />
          <Route path="/statistic" component={ Statistic } />
          <Route path="/" component={ HomePage } />
        </Switch>
      </div>
    </Router>
  )
}

