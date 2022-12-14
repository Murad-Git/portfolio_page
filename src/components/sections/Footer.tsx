import classes from './Footer.module.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Footer() {
  return (
    <section className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.field}>
          <h3 className={classes.contact}>Contact me</h3>
          <ul className={classes.socials}>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/murad_kos/'
              >
                <InstagramIcon className={classes.icon} />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://twitter.com/MuradKos1'
              >
                <TwitterIcon className={classes.icon} />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/murad-kos/'
              >
                <LinkedInIcon className={classes.icon} />
              </a>
            </li>
            <li>
              <a target='_blank' rel='noreferrer' href='mailto:blank@blank.com'>
                <button type='submit'>
                  <AlternateEmailIcon className={classes.icon} />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
