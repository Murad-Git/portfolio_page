import classes from './Intro.module.scss';
import heroImg from '../../img/Kos_Murad-removebg_sm.png';
import { titlesAnimation } from '../../data/projects';
import Toggle from '../toggle/Toggle';

const Intro = () => {
  return (
    <section className={classes.i} id='intro'>
      {/* <Toggle /> */}
      <div className={classes['i-left']}>
        <div className={classes['i-left-wrapper']}>
          <h2 className={classes['i-intro']}>Hello, My name is</h2>
          <h1 className={classes['i-name']}>Murad Kos</h1>
          <div className={classes['i-title']}>
            <ul className={classes['i-title-wrapper']}>
              {titlesAnimation.map((title) => (
                <li key={title.id} className={classes['i-title-item']}>
                  {title.title}
                </li>
              ))}
            </ul>
          </div>
          <p className={classes['i-desc']}>
            My passion is to create beautiful and clear web pages.
          </p>

          {/* <div className={classes.scroll}> */}
          <a href='#about'>
            <div className={classes.scroll}></div>
          </a>
          {/* </div> */}
          {/* <ScrollSvg className={classes['i-scroll']} /> */}
        </div>
      </div>
      <div className={classes['i-right']}>
        <div className={classes['i-bg']}></div>
        <img src={heroImg} alt='hero-img' className={classes['i-img']} />
      </div>
    </section>
  );
};

export default Intro;
