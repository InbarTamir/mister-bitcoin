import { Component } from 'react'
import { Link } from 'react-router-dom'
import { ContactPreview } from '../cmps/ContactPreview'
import { contactService } from '../services/contact.service'

export class ContactDetails extends Component {
  state = {
    contact: null
  }

  async componentDidMount() {
    console.log(this.props)
    const contact = await contactService.getContactById(this.props.match.params.id)
    this.setState({ contact })
  }

  render() {
    const { contact } = this.state
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
      </section>
    )
  }
}
