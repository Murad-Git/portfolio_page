import classes from './About.module.scss';
import { FaReact, FaSass, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiRedux, SiMongodb } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import figmaImg from '../../img/figma.png';
import frontImg from '../../img/front-img.webp';

import { useInViewHook } from '../hooks/use-inViewEffect';

const About = () => {
  const { ref, isVisible } = useInViewHook();
  return (
    <section ref={ref} className={classes.a} id='about'>
      <div className={classes['a-left']}>
        {isVisible && (
          <>
            <div className={`${classes['a-card']} ${classes.bg}`}></div>
            <div className={`${classes['a-card']}  ${classes.imgAnim}`}>
              <img
                src={frontImg}
                alt='about'
                className={`${classes['a-img']}`}
              />
            </div>
          </>
        )}
      </div>
      {isVisible && (
        <div className={classes['a-right']}>
          <h1 className={classes['a-right-title']}>About me</h1>
          <p className={classes['a-right-sub']}>
            Hello! My name is Murad and I am from Poland.
          </p>
          <p className={classes['a-right-desc']}>
            I started my learning in 2020 and made some projects using below
            technologies. Currently I am deeping my knowledge in{' '}
            <strong>React, TypeScript and NextJS.</strong>
            <br />
            My goal is to become Front-end Developer.
          </p>
          <div className={classes['a-tech']}>
            <div className={classes.tool}>
              <FaReact className={classes.react} />
            </div>
            <div className={classes.tool}>
              <SiRedux className={classes.redux} />
            </div>
            <div className={classes.tool}>
              <SiTypescript className={classes.ts} />
            </div>
            <div className={classes.tool}>
              <GrNode className={classes.node} />
            </div>
            <div className={classes.tool}>
              <SiMongodb className={classes.mongodb} />
            </div>
            <div className={classes.tool}>
              <FaSass className={classes.sass} />
            </div>
            <div className={classes.tool}>
              <FaBootstrap className={classes.bootstrap} />
            </div>
            <div className={classes.tool}>
              <SiNextdotjs className={classes.nextjs} />
            </div>
            <div className={classes.tool}>
              <img src={figmaImg} alt='figma' className={classes.figma} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
