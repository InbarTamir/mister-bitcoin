import { ContactDetails } from '../pages/ContactDetails'

export function ContactPreview({ contact }) {
  return (
    <div className="contact-preview">
      <img className="contact-img" src={`https://robohash.org/${contact.name}?set=set5`} />
      <span>{ contact.name }</span>
    </div>
  )
}
