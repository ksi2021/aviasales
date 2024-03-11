import { connect } from 'react-redux';

import classes from './tabs.module.scss';

function Tabs({ changeSort, sort }) {
  const onClickHandler = (e) => {
    if (sort !== e.target.id) changeSort(e.target.id);
  };

  return (
    <div className={[classes.tabs]}>
      <div className={sort === 'cheap' && classes.active} id="cheap" onClick={onClickHandler}>
        САМЫЙ ДЕШЕВЫЙ
      </div>
      <div className={sort === 'fast' && classes.active} id="fast" onClick={onClickHandler}>
        САМЫЙ БЫСТРЫЙ
      </div>
      <div className={sort === 'optimal' && classes.active} id="optimal" onClick={onClickHandler}>
        ОПТИМАЛЬНЫЙ
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSort: (payload) => ({ type: 'CHANGE_SORT', payload }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(Tabs);
