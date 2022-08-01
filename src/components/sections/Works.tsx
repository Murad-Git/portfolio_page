import classes from './Works.module.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import WorksContainer from '../UI/WorksContainer';
import { useContext } from 'react';
import { ThemesContext } from '../../store/themes.context';

const Works = () => {
  const themeCtx = useContext(ThemesContext);
  const { changeSlide } = themeCtx;
  const { currentSlide } = themeCtx;
  return (
    <section className={classes.works} id='works'>
      <div
        className={classes.slider}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <WorksContainer />
      </div>
      <ArrowBackIosNewIcon
        className={`${classes.arrow} ${classes.left}`}
        onClick={() => changeSlide('left')}
      />
      <ArrowBackIosNewIcon
        className={`${classes.arrow} ${classes.right}`}
        onClick={() => changeSlide(null)}
      />
    </section>
  );
};

export default Works;
