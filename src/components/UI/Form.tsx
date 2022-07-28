import { useContext, useRef, useState } from 'react';
import { ThemesContext } from '../../store/themes.context';
import classes from './Form.module.scss';
import emailjs from '@emailjs/browser';

const Inputs = () => {
  const themeCtx = useContext(ThemesContext);
  const { darkMode } = themeCtx;
  const formRef = useRef<HTMLFormElement>(null);
  const [formSent, setFormSent] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = formRef.current;
    console.log(`formRef: ${formRef}, enteredText ${enteredText}`);

    emailjs
      .sendForm(
        'service_499lwmq',
        'template_46lgapl',
        enteredText!,
        'fkfSYTxNHIzl7jb8z'
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className={`${classes.form} ${darkMode ? classes['form-dark'] : ''}`}
      ref={formRef}
      onSubmit={submitHandler}
    >
      <label htmlFor='user_name'></label>
      <input type='text' placeholder='Name' name='user_name' id='user_name' />
      <label htmlFor='user_subject'></label>
      <input
        type='text'
        placeholder='Subject'
        name='user_subject'
        id='user_subject'
      />
      <label htmlFor='user_email'></label>
      <input
        type='email'
        placeholder='E-Mail'
        name='user_email'
        id='user_email'
      />
      <label htmlFor='user_message'></label>
      <textarea
        name='user_message'
        id='user_message'
        rows={6}
        placeholder='Message'
      />
      <button>Submit</button>
      {formSent && <p>Thank you for your email</p>}
    </form>
  );
};

export default Inputs;
