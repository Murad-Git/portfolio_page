import classes from './App.module.scss';
import Intro from './components/sections/Intro';
import About from './components/sections/About';
import ProductList from './components/sections/ProductList';
import Contact from './components/sections/Contact';
import Toggle from './components/toggle/Toggle';
import { useContext } from 'react';
import { ThemesContext } from './store/themes.context';
import Navbar from './components/navbar/Navbar';
import Works from './components/sections/Works';

function App() {
  const themeCtx = useContext(ThemesContext);
  return (
    <div className={classes.app}>
      <Navbar />
      {/* <Toggle /> */}
      <div className={classes.sections}>
        <Intro />
        <About />
        <ProductList />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;

//  style={{
//     backgroundColor: darkMode ? '#222' : 'white',
//     color: darkMode ? 'white' : 'black',
//   }}
