import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';


const ContactForm = ({ onAddContact }) => {
   const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    onAddContact(name, number);
    resetForm();
   };

   const contactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    number: Yup.string().min(7).required('Required'),
   });

   const initialValues = {
    name: '',
    number: '',
   };

    return (
        <div className={s.wrapper}>
            <Formik validationSchema={contactSchema} onSubmit={handleSubmit} initialValues={initialValues}>
                  <Form className={s.form}>
                  <label className={s.label}>
                      <span>Name</span>
                      <Field name='name' className={s.input}></Field>
                      <ErrorMessage name='name' component='span' className={s.error}></ErrorMessage>
                  </label>
                  <label className={s.label}>
                      <span>Number</span>
                      <Field name='number' className={s.input}></Field>
                      <ErrorMessage name='number' component='span' className={s.error}></ErrorMessage>
                  </label>
                  <button type='submit' className={s.button}>Add contact</button>
              </Form>
            </Formik>
        </div>
    )
}

export default ContactForm