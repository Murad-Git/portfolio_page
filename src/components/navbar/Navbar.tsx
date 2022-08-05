import { useContext, useEffect, useState } from 'react';
import { ThemesContext } from '../../store/main.context';
import Toggle from '../toggle/Toggle';
import Menu from './Menu';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(Boolean);
  const themeCtx = useContext(ThemesContext);
  const { openMenu } = themeCtx;

  const handleResize = () => {
    if (window.innerWidth < 768) setIsMobile(true);
    else setIsMobile(false);
  };
  useEffect(() => {
    ['load', 'resize'].map((event) =>
      window.addEventListener(event, handleResize)
    );
  });

  return (
    <section className={`${classes.nav}`}>
      <div className={classes.wrapper}>
        <a href='#intro' className={classes.logo}>
          welcome.
        </a>
        <div className={classes.itemContainer}>
          <Menu isMobile={isMobile} openMenu={openMenu} />
        </div>
        <Toggle />
      </div>
    </section>
  );
};
export default Navbar;
