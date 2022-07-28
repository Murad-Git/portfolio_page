import { useContext, useEffect, useState } from 'react';
import { ThemesContext } from '../../store/themes.context';
import Menu from './Menu';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const themeCtx = useContext(ThemesContext);
  const { isMenuOpen } = themeCtx;
  const { openMenu } = themeCtx;

  const handleResize = () => {
    if (window.innerWidth < 480) setIsMobile(true);
    else setIsMobile(false);
  };
  useEffect(() => {
    ['load', 'resize'].map((event) =>
      window.addEventListener(event, handleResize)
    );
    // window.addEventListener('load', handleResize);
  });

  return (
    <section className={`${classes.nav}`}>
      <div className={classes.wrapper}>
        <a href='#intro' className={classes.logo}>
          genius.
        </a>
        <div className={classes.itemContainer}>
          <Menu isMobile={isMobile} openMenu={openMenu} />
        </div>
      </div>
    </section>
  );
};
export default Navbar;
