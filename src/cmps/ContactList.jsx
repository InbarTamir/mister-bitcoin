import { Link } from 'react-router-dom'
import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts }) {
  return (
    <div>
      {contacts && contacts.map(contact => <Link to={`/contact/${contact._id}`} key={ contact._id }><ContactPreview contact={contact} /></Link>) }
    </div>
  )
}
