
export function ContactFilter({ onFilter }) {
  return (
    <div className="contact-filter">
      <input type="text" placeholder="Search" onChange={ (ev) => onFilter({term: ev.target.value}) } />
    </div>
  )
}
