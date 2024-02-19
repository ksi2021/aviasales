// eslint-disable-next-line import/no-extraneous-dependencies
import { format, addMinutes } from 'date-fns';

import classes from './route.module.scss';

function convertTime(time) {
  const m = time % 60;
  const h = (time - m) / 60;

  return `${(h < 10 ? '0' : '') + h.toString()}ч ${m < 10 ? '0' : ''}${m.toString()}м`;
}

function Route({ data }) {
  const { origin, destination, date, stops, duration } = data;

  const startDate = format(new Date(date), 'HH:mm');
  const endDate = format(addMinutes(new Date(date), duration), 'HH:mm');

  return (
    <div className={classes.route}>
      <div>
        <div className={classes.label}>
          {origin}-{destination}
        </div>
        <div className={classes.data}>{startDate} - {endDate}</div>
      </div>
      <div>
        <div className={classes.label}>В ПУТИ</div>
        <div className={classes.data}>{convertTime(duration)}</div>
      </div>
      <div>
        <div className={classes.label}>{stops.length} ПЕРЕСАДКИ</div>
        <div className={classes.data}> {stops.join(', ')} </div>
      </div>
    </div>
  );
}

export default Route;
