import Contact from '../Contact/Contact.jsx';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={s.wrapper}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
);


export default ContactList;