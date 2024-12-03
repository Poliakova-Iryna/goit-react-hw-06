import s from './Contact.module.css';
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const Contact = ({ contact, onDeleteContact }) => (
    <li className={s.item}>
      <div className={s.container}>
         <p className={s.name}> <IoPerson /> {contact.name}</p>
         <p className={s.number}> <FaPhone /> {contact.number}</p>
      </div>
      <button className={s.button} onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );

export default Contact;