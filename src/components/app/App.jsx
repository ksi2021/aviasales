import SideBar from '../filter/filter';
import Content from '../content/content';

import classes from './app.module.scss';
import Logo from './Logo.png';

function App() {
  return (
    <div className="App">
      <div className={classes.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={classes['flex-center']}>
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
