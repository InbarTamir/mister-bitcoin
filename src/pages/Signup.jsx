import { Component } from 'react'
import { Link } from 'react-router-dom'
import bitcoinIcon from '../assets/imgs/bitcoin.png'
import { userService } from '../services/user.service'

export class Signup extends Component {

  state = {
    username: ''
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState({ [field]: value })
  }

  onSignup = async (ev) => {
    ev.preventDefault()
    await userService.signup(this.state.username)
    this.props.history.push('/')
  }

  render() {
    const { username } = this.state
    return (
      <section className="signup">
        <img src={ bitcoinIcon } />
        <form>
          <label htmlFor="username">Please enter your name:</label>
          <input id="username" name="username" value={ username } onChange={ this.handleChange } />
          <button onClick={ this.onSignup }>Sign up</button>
        </form>
      </section>
    )
  }
}
