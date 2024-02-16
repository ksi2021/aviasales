import classes from './tabs.module.scss';

function Tabs() {
  return (
    <div className={[classes.tabs]}>
      <div className={classes.active}>САМЫЙ ДЕШЕВЫЙ</div>
      <div>САМЫЙ БЫСТРЫЙ</div>
    </div>
  );
}

export default Tabs;
