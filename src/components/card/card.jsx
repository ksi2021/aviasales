import Route from '../route/route';

import classes from './card.module.scss';
import Logo from './S7 Logo.png';

function Card() {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.price}>13 400 P</div>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div>
        <Route />
      </div>
      <div>
        <Route />
      </div>
    </div>
  );
}

export default Card;
