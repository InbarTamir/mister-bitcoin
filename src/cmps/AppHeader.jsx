import { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink, Switch, withRouter } from 'react-router-dom'

export class AppHeader extends Component {
  render() {
    return (
      <div className="app-header">
        <Link to="/">
          <div className="logo">
            mister BITCoin
          </div>
        </Link>
        <nav className="main-nav">
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/contact">Contacts</NavLink>
          <NavLink to="/statistic">Statistics</NavLink>
        </nav>
      </div>
    )
  }
}

function mapStateProps(state) {
  return state
}

const mapDispatchToProps = {

}

// export const AppHeader = withRouter(connect(mapStateProps, mapDispatchToProps))(_AppHeader)