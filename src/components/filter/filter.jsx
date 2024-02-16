import classes from './filter.module.scss';

function SideBar() {
  return (
    <div className={classes.sidebar}>
      <span className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className={classes.item}>
        <input type="checkbox" className={classes.checkbox}/>
        <span className={classes.visualCheckBox}></span>
        test
      </label>
      <label className={classes.item}>
        <input type="checkbox" className={classes.checkbox}/>
        <span className={classes.visualCheckBox}></span>
        test
      </label>
      <label className={classes.item}>
        <input type="checkbox" className={classes.checkbox}/>
        <span className={classes.visualCheckBox}></span>
        test
      </label>
      <label className={classes.item}>
        <input type="checkbox" className={classes.checkbox}/>
        <span className={classes.visualCheckBox}></span>
        test
      </label>
      <label className={classes.item}>
        <input type="checkbox" className={classes.checkbox}/>
        <span className={classes.visualCheckBox}></span>
        test
      </label>
    </div>
  );
}

export default SideBar;
