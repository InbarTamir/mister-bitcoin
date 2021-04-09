import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contact.service'

export class ContactEdit extends Component {
  state = {
    contact: null,
    // name: '',
    // phone: '',
    // email: ''
  }

  async componentDidMount() {
    const {id} = this.props.match.params
    const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
    this.setState({ contact })
  }

  onSubmit = async (ev) => {
    ev.preventDefault()
    await contactService.saveContact(this.state.contact)
    this.props.history.push('/contact')
  }

  onRemoveContact = async () => {
    console.log('remove me')
    const contacts = await contactService.removeContact(this.state.contact._id)
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }))
  }

  render() {
    if (!this.state.contact) return <div>No Contact</div>
    const { _id, name, phone, email } = this.state.contact
    return (
      <section className="contact-edit">
        <Link to={_id ? `/contact/${_id}` : '/contact'}>Back</Link>
        {_id && <Link to="/contact" onClick={this.onRemoveContact}>Remove</Link>}
        {name && <img className="contact-img" src={ `https://robohash.org/${name}?set=set5` } />}
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={ name } onChange={ this.handleChange } type="text" placeholder="Name" />
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" value={ phone } onChange={ this.handleChange } type="text" placeholder="Phone" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" value={ email } onChange={ this.handleChange } type="text" placeholder="Email" />
          <button onClick={ this.onSubmit }>Save</button>
        </form>
      </section>
    )
  }
}
