import React, { useContext } from 'react';
import { ThemesContext } from '../../store/main.context';
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
        <button aria-label='menu' className={classes.hamburger}></button>
      </span>
      <ul className={`${isMobile ? classes.listSmall : classes.listBig}`}>
        <li>
          <a className={classes.navItem} href='#intro'>
            Home
          </a>
        </li>
        <li>
          <a className={classes.navItem} href='#about'>
            About
          </a>
        </li>
        <li>
          <a className={classes.navItem} href='#projects'>
            Projects
          </a>
        </li>
        <li>
          <a className={classes.navItem} href='#works'>
            Works
          </a>
        </li>
        <li>
          <a className={classes.navItem} href='#contact'>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
