import classes from './Contact.module.scss';
import Icons from '../UI/Icons';
import Form from '../UI/Form';
import Footer from './/Footer';

const Contact = () => {
  return (
    <section className={classes.c} id='contact'>
      <div className={classes['c-bg']}></div>
      <h1 className={classes['c-title']}>Let's get in touch</h1>
      <div className={classes['c-wrapper']}>
        <div className={classes['c-left']}>
          <div className={classes['c-info']}>
            <Icons />
          </div>
        </div>
        <div className={classes['c-right']}>
          <p className={classes['c-desc']}>
            <strong>Send me a message.</strong>
          </p>
          <Form />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
