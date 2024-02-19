import Route from '../route/route';

import classes from './card.module.scss';

function Card({ ticket }) {
  const { price, carrier, segments } = ticket;
  const [to, back] = segments;
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.price}>{price.toLocaleString()} P</div>
        <div>
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </div>
      </div>
      <div>
        <Route data={to} />
      </div>
      <div>
        <Route data={back} />
      </div>
    </div>
  );
}

export default Card;
