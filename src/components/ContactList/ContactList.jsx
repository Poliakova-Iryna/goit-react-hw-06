import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice.js';
import Contact from '../Contact/Contact.jsx';
import s from './ContactList.module.css';
import { selectNameFilter } from '../../redux/filterSlice.js';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredData = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul className={s.wrapper}>
      {filteredData.map(contact => (
        <Contact {...contact} key={contact.id} />
      ))}
    </ul>
  )
};