import classes from './Works.module.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import WorksContainer from '../UI/WorksContainer';
import { useContext } from 'react';
import { SliderDirection, ThemesContext } from '../../store/main.context';

const Works = () => {
  const { changeSlide } = useContext(ThemesContext);
  const { currentSlide } = useContext(ThemesContext);
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
        onClick={() => changeSlide(SliderDirection.Left)}
      />
      <ArrowBackIosNewIcon
        className={`${classes.arrow} ${classes.right}`}
        onClick={() => changeSlide(SliderDirection.Right)}
      />
    </section>
  );
};

export default Works;
