import { connect } from 'react-redux';

import classes from './filter.module.scss';
import FilterItem from './item';

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

  const items = [
    { value: 'Все', name: 'all' },
    { value: 'Без пересадок', name: 'transfer_0' },
    { value: '1 Пересадка', name: 'transfer_1' },
    { value: '2 Пересадки', name: 'transfer_2' },
    { value: '3 Пересадки', name: 'transfer_3' },
  ];

  // console.log(filters);
  return (
    <div className={classes.sidebar}>
      <span className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      {items.map((el, id) => (
        <FilterItem key={id} classes={classes} filters={filters} changeFilter={changeCheckBox} {...el} />
      ))}
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
