import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'
import coinsIcon from '../assets/imgs/coins.png'
import bitcoinIcon from '../assets/imgs/bitcoin.png'

export class HomePage extends Component {
  state = {
    user: null,
    rate: ''
  }

  async componentDidMount() {
    const user = userService.getUser() || {}
    const rate = await bitcoinService.getRate(user.coins)
    this.setState({ user, rate: rate.data })
  }
  render() {
    return (
      this.state.user && (<section className="home-page">
        <h2>Hello { this.state.user.name }!</h2>
        <p><img src={ coinsIcon } /> Coins: { this.state.user.coins }</p>
        <p><img src={ bitcoinIcon } /> BTC: { this.state.rate }</p>
      </section>)
    )
  }
}

function mapStateProps(state) {
  return state
}

const mapDispatchToProps = {

}

// export const HomePage = connect(mapStateProps, mapDispatchToProps)(_HomePage)