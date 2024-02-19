import { useEffect } from 'react';
import { connect } from 'react-redux';

import SideBar from '../filter/filter';
import Content from '../content/content';
import getTickets from '../services/aviasales';

import classes from './app.module.scss';
import Logo from './Logo.png';

const fetchTickets = () => {
  return async function (dispatch) {
    const loop = async () => {
      const part = await getTickets();
      dispatch({ type: 'ADD_TICKETS', part });
      if (part.error) dispatch({ type: 'ADD_ERROR', part });
      if (part.stop) dispatch({ type: 'LOAD_COMPLETE' });
      if (!part.stop) loop();
    };
    await loop();
  };
};

function App({ fetchTicketsProp }) {
  useEffect(() => {
    fetchTicketsProp();
  }, []);
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTicketsProp: () => fetchTickets(),
  };
};
export default connect(null, mapDispatchToProps())(App);
