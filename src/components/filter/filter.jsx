import { connect } from 'react-redux';

import classes from './filter.module.scss';

function SideBar({ filters, changeFilters }) {
  const changeCheckBox = (e) => {
    const { name, checked } = e.target;
    const allFilters = ['all', 'transfer_0', 'transfer_1', 'transfer_2', 'transfer_3'];
    let newFilters = { ...filters };

    if (name === 'all') {
      newFilters = allFilters.reduce((acc, filter) => ({ ...acc, [filter]: checked }), {});
    } else {
      newFilters[name] = checked;
      const { all, ...filtersWithOutAll } = newFilters;
      const totalActive = Object.values(filtersWithOutAll).filter(Boolean).length;
      newFilters.all = totalActive === 4;
    }
    changeFilters(newFilters);
  };

  // console.log(filters);
  return (
    <div className={classes.sidebar}>
      <span className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <label className={classes.item}>
        <input
          onChange={changeCheckBox}
          type="checkbox"
          checked={filters.all && true}
          className={classes.checkbox}
          name="all"
        />
        <span className={classes.visualCheckBox}></span>
        Все
      </label>
      <label className={classes.item}>
        <input
          onChange={changeCheckBox}
          type="checkbox"
          checked={filters.transfer_0 && true}
          className={classes.checkbox}
          name="transfer_0"
        />
        <span className={classes.visualCheckBox}></span>
        Без пересадок
      </label>
      <label className={classes.item}>
        <input
          onChange={changeCheckBox}
          type="checkbox"
          checked={filters.transfer_1 && true}
          className={classes.checkbox}
          name="transfer_1"
        />
        <span className={classes.visualCheckBox}></span>1 Пересадка
      </label>
      <label className={classes.item}>
        <input
          onChange={changeCheckBox}
          type="checkbox"
          checked={filters.transfer_2 && true}
          className={classes.checkbox}
          name="transfer_2"
        />
        <span className={classes.visualCheckBox}></span>2 Пересадки
      </label>
      <label className={classes.item}>
        <input
          onChange={changeCheckBox}
          type="checkbox"
          checked={filters.transfer_3 && true}
          className={classes.checkbox}
          name="transfer_3"
        />
        <span className={classes.visualCheckBox}></span>3 Пересадки
      </label>
      {/* <button onClick={() => onChangeBox(true, 'test_key')}>click</button> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilters: (payload) => ({ type: 'CHANGE_FILTER', payload }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(SideBar);
