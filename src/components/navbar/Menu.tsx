import React, { useContext } from 'react';
import { ThemesContext } from '../../store/themes.context';
import classes from './Menu.module.scss';

const Menu: React.FC<{ openMenu?: () => void; isMobile: boolean }> = ({
  openMenu,
  isMobile,
}) => {
  const themeCtx = useContext(ThemesContext);
  const { isMenuOpen } = themeCtx;
  return (
    <div
      className={`${isMobile ? classes.navSmall : classes.nav} ${
        isMenuOpen && classes.active
      }`}
      onClick={() => openMenu?.()}
    >
      <span className={classes.navSmallMenu}>
        <span className={classes.hamburger}></span>
      </span>
      <ul className={`${isMobile ? classes.listSmall : classes.listBig}`}>
        <li>
          <a href='#intro'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#works'>Works</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
