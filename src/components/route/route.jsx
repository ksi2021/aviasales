import classes from './route.module.scss';

console.log(classes);
function Route() {
  return (
    <div className={classes.route}>
      <div>
        <div className={classes.label}>MOW-HKT</div>
        <div className={classes.data}>10:45-08:00</div>
      </div>
      <div>
        <div className={classes.label}>В ПУТИ</div>
        <div className={classes.data}>21Ч 15М</div>
      </div>
      <div>
        <div className={classes.label}>2 ПЕРЕСАДКИ</div>
        <div className={classes.data}>HKG,JNB</div>
      </div>
    </div>
  );
}

export default Route;
