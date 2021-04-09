import { Component } from 'react'
import { Link } from 'react-router-dom'
import { MoveList } from '../cmps/MoveList'
import { TransferFund } from '../cmps/TransferFund'
import { contactService } from '../services/contact.service'
import { userService } from '../services/user.service'

export class ContactDetails extends Component {
  state = {
    contact: null,
    moves: null,
    loggedInUser: null
  }

  async componentDidMount() {
    const contact = await contactService.getContactById(this.props.match.params.id)
    const moves = userService.getMovesForContact(contact._id)
    const loggedInUser = userService.getUser()
    this.setState({ contact, moves, loggedInUser })
  }

  onTransfer = async (amount) => {
    if (!amount) return
    let move = await userService.addMove(this.state.contact, amount)
    delete move.toId
    this.setState(prevState => ({...prevState, loggedInUser: userService.getUser(), moves: [move,...prevState.moves]}))
  }

  render() {
    const { contact, moves, loggedInUser } = this.state
    if (!contact) return <div>No Contact.</div>
    return (
      <section className="contact-details">
        <Link to="/contact"><button className="btn-back">Back</button></Link>
        <Link to={ `/contact/edit/${contact._id}` }><button className="btn-edit">Edit</button></Link>
        <div className="contact-info">
          <img className="contact-img" src={ `https://robohash.org/${contact.name}?set=set5` } />
          <p>Name: { contact.name }</p>
          <p>Phone: { contact.phone }</p>
          <p>Email: { contact.email }</p>
        </div>
        <TransferFund contact={ contact } maxCoins={ loggedInUser.coins } onTransfer={ this.onTransfer } />
        <MoveList title="Your Moves" moves={ moves } />
      </section>
    )
  }
}
