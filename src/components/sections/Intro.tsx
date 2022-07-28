import classes from './Intro.module.scss';
import heroImg from '../../img/hero-trans.png';
import { ReactComponent as ScrollSvg } from '../../img/scroll-btn.svg';
import { titlesAnimation } from '../../data/projects';

const Intro = () => {
  return (
    <section className={classes.i} id='intro'>
      <div className={classes['i-left']}>
        <div className={classes['i-left-wrapper']}>
          <h2 className={classes['i-intro']}>Hello, My name is</h2>
          <h1 className={classes['i-name']}>Jenny Burton</h1>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            doloremque sed accusamus cupiditate corrupti. Suscipit, itaque?
            Eaque eos amet minus?
          </p>
          <ScrollSvg className={classes['i-scroll']} />
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
