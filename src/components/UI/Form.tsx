import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemesContext } from '../../store/main.context';
import classes from './Form.module.scss';
import emailjs from '@emailjs/browser';
import useValidate from '../hooks/use-validate';

const Inputs = () => {
  const { darkMode } = useContext(ThemesContext);
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState('Submit');
  const [formValid, setFormValid] = useState(false);

  //refs
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  //states
  const [nameVal, setNameVal] = useState('');
  const [subjectVal, setSubjectVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [messageVal, setMessageVal] = useState('');

  const nameBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setNameVal(event.target.value);
  };
  const subjectBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setSubjectVal(event.target.value);
  };
  const emailBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setEmailVal(event.target.value);
  };
  const messageBlurHandler = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setMessageVal(event.target.value);
  };

  //checking if values are valid
  const { nameValid, subjectValid, emailValid, messageValid } = useValidate({
    name: nameVal,
    subject: subjectVal,
    email: emailVal,
    message: messageVal,
  });

  //checking form validity every 500ms
  useEffect(() => {
    const identifier = setTimeout(() => {
      const formValidity =
        nameValid && subjectValid && emailValid && messageValid ? true : false;
      setFormValid(formValidity);
    }, 500);

    return () => {
      console.log('cleanup');
      clearTimeout(identifier);
    };
  }, [nameValid, subjectValid, emailValid, messageValid]);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (formValid) {
      setFormStatus('Sending...');
      // activate to send email and comment timeout
      const enteredText = formRef.current;

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
            setFormStatus('Done!');
          },
          (error) => {
            console.log(error.text);
            setFormStatus('Something went wrong :(');
          }
        );

      // setTimeout(() => {
      //   setFormStatus('Done!');
      // }, 2000);

      clearFormHandler();
      setFormValid(false);
    }
    !messageValid && messageRef.current?.focus();
    !emailValid && emailRef.current?.focus();
    !subjectValid && subjectRef.current?.focus();
    !nameValid && nameRef.current?.focus();
  };
  const clearFormHandler = () => {
    formRef.current?.reset();
  };

  return (
    <form
      className={`${classes.form} ${darkMode && classes['form-dark']}`}
      ref={formRef}
      onSubmit={submitHandler}
    >
      <label htmlFor='user_name'>Name</label>
      <input
        className={`${nameValid === false && classes.invalid}`}
        ref={nameRef}
        onBlur={nameBlurHandler}
        type='text'
        placeholder={nameValid === false ? 'Please enter name' : 'Name'}
        name='user_name'
        id='user_name'
      />
      <label htmlFor='user_subject'>Subject</label>
      <input
        className={`${subjectValid === false && classes.invalid}`}
        ref={subjectRef}
        onBlur={subjectBlurHandler}
        type='text'
        placeholder={
          subjectValid === false ? 'Please enter subject' : 'Subject'
        }
        name='user_subject'
        id='user_subject'
      />
      <label htmlFor='user_email'>Email</label>
      <input
        className={`${emailValid === false && classes.invalid}`}
        onBlur={emailBlurHandler}
        ref={emailRef}
        type='email'
        placeholder={emailValid === false ? 'Please enter email' : 'E-Mail'}
        name='user_email'
        id='user_email'
      />
      <label htmlFor='user_message'>Your Message</label>
      <textarea
        className={`${messageValid === false && classes.invalid}`}
        ref={messageRef}
        onBlur={messageBlurHandler}
        name='user_message'
        id='user_message'
        rows={6}
        placeholder={
          messageValid === false ? 'Please enter message' : 'Message'
        }
      />
      <button type='submit'>{formStatus}</button>
    </form>
  );
};

export default Inputs;
