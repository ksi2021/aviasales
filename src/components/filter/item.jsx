export default function FilterItem({ classes, filters, changeFilter, value, name }) {
  return (
    <label className={classes.item}>
      <input
        onChange={changeFilter}
        type="checkbox"
        checked={(filters[name] || filters.all) && true}
        className={classes.checkbox}
        name={name}
      />
      <span className={classes.visualCheckBox}></span>
      {value}
    </label>
  );
}
