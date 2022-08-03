import classes from './Toggle.module.scss';

import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { ThemesContext } from '../../store/themes.context';

const Toggle = () => {
  const themeCtx = useContext(ThemesContext);
  const { darkMode } = themeCtx;
  const { toggleMode } = themeCtx;
  return (
    <section className={classes.t} onClick={() => toggleMode()}>
      <FontAwesomeIcon icon={faSun} className={classes['t-icon']} />
      <FontAwesomeIcon icon={faMoon} className={classes['t-icon']} />
      <button
        className={`${classes['t-button']} ${darkMode && classes.dark}`}
      ></button>
    </section>
  );
};

export default Toggle;
