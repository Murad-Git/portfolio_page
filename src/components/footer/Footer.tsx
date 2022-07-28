import classes from './Footer.module.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
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
              <a href='#'>
                <FacebookIcon className={classes.icon} />
              </a>
            </li>
            <li>
              <a href='#'>
                <InstagramIcon className={classes.icon} />
              </a>
            </li>
            <li>
              <a href='#'>
                <TwitterIcon className={classes.icon} />
              </a>
            </li>
            <li>
              <a href='#'>
                <LinkedInIcon className={classes.icon} />
              </a>
            </li>
            <li>
              <a href='mailto:blank@blank.com'>
                <button type='submit'>
                  <AlternateEmailIcon className={classes.icon} />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={classes.bottom}>
        <div className={classes.container}>
          <p className={classes.deskt}>
            © 2022 Portfolio Page. All Rights Reserved. Created by Murad Kos
          </p>
        </div>
      </div> */}
      {/* <div className={classes.content}>
        <p className={classes.mob}>© Murad Kos</p>
        <p className={classes.deskt}>
          © 2022 Portfolio Page. All Rights Reserved. Created by Murad Kos
        </p>
        <h3 className={`${classes.contact} ${classes.deskt}`}>Contact me</h3>
        <ul className={classes.socials}>
          <li>
            <a href='#'>
              <FacebookIcon className={classes.icon} />
            </a>
          </li>
          <li>
            <a href='#'>
              <InstagramIcon className={classes.icon} />
            </a>
          </li>
          <li>
            <a href='#'>
              <TwitterIcon className={classes.icon} />
            </a>
          </li>
          <li>
            <a href='#'>
              <LinkedInIcon className={classes.icon} />
            </a>
          </li>
          <li>
            <a href='mailto:blank@blank.com'>
              <button type='submit'>
                <AlternateEmailIcon className={classes.icon} />
              </button>
            </a>
          </li>
        </ul>
      </div> */}
    </section>
  );
}
