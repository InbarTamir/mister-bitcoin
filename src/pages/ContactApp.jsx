import { Component } from 'react'
import { Link } from 'react-router-dom'
import { ContactFilter } from '../cmps/ContactFilter'
import { ContactList } from '../cmps/ContactList'
import { contactService } from '../services/contact.service'

export class ContactApp extends Component {
  state = {
    contacts: null
  }

  async componentDidMount() {
    const contacts = await contactService.getContacts()
    this.setState({ contacts })
  }

  onFilter = async (filterBy) => {
    const regex = new RegExp(filterBy.term | /()/, 'i')
    const contacts = await contactService.getContacts()
    const contactsToShow = contacts.filter(contact => regex.test(contact.name) || contact.phone.includes(filterBy.term))
    this.setState({contacts: contactsToShow})
  }
  
  render() {
    return (
      <section className="contact-app">
        <ContactFilter onFilter={this.onFilter} />
        <Link to="/contact/edit"><button className="add-contact">+</button></Link>
        <ContactList contacts={this.state.contacts} />
      </section>
    )
  }
}
