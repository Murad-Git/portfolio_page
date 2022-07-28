import classes from './About.module.scss';
import aboutImg from '../../img/about-img.jpg';
import awardImg from '../../img/award.jpg';

const About = () => {
  return (
    <section className={classes.a} id='about'>
      <div className={classes['a-left']}>
        <div className={`${classes['a-card']} ${classes.bg}`}></div>
        <div className={`${classes['a-card']} ${classes.imgAnim}`}>
          <img src={aboutImg} alt='' className={classes['a-img']} />
        </div>
      </div>
      <div className={classes['a-right']}>
        <h1 className={classes['a-title']}>About me</h1>
        <p className={classes['a-sub']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          voluptates?
        </p>
        <p className={classes['a-desc']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iusto
          explicabo voluptatem ipsam, quisquam ratione sequi voluptas ad sit
          facilis minus laudantium impedit ducimus repellat exercitationem
          temporibus repudiandae eveniet dolor.
        </p>
        <div className={classes['a-award']}>
          <img
            src={awardImg}
            alt='award-img'
            className={classes['a-award-img']}
          />
          <div className={classes['a-award-texts']}>
            <h4 className={classes['a-award-title']}>
              International Design Awards 2022
            </h4>
            <p className={classes['a-award-desc']}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
              beatae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
