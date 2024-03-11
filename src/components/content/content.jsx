import { connect } from 'react-redux';

import Card from '../card/card';
import Tabs from '../tabs/tabs';
import TicketLoader from '../UI_Helpers/loader/loader';
import Alert from '../UI_Helpers/notification/notification';

import classes from './content.module.scss';

function Content({ tickets, count, addTickets, sort, filters, errors, loading }) {
  const filterList = { transfer_0: 0, transfer_1: 1, transfer_2: 2, transfer_3: 3 };
  const cheapSort = (a, b) => a.price - b.price;
  const fastSort = (a, b) =>
    a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
  const optimalSort = (a, b) => a.segments[0].duration + a.segments[1].duration + a.price - (b.segments[0].duration + b.segments[1].duration + b.price);

  const sortList = { 'fast': fastSort, 'cheap': cheapSort, 'optimal': optimalSort};
  const filterTickets = (tickets) => {
    const totalActive = Object.values(filters).filter(Boolean).length;
    if (filters.all) return tickets;
    if (totalActive === 0) return [];

    const filterKeys = Object.keys(filters).filter((el) => filters[el]);
    const filterValues = filterKeys.map((el) => filterList[el]);
    const filterSuccess = (ticket) => {

      if (filterValues.includes(ticket.segments[0].stops.length) && ticket.segments[1].stops.length === 0) return true;
      if (filterValues.includes(ticket.segments[1].stops.length) && ticket.segments[0].stops.length === 0) return true;
      if (!filterValues.includes(ticket.segments[0].stops.length) || !filterValues.includes(ticket.segments[1].stops.length)) return false;
      // for (let i = 0; i < filterKeys.length; i++)
      //   if (filterList[filterKeys[i]] === ticket.segments[0].stops.length + ticket.segments[1].stops.length)
      //     return true;

      return true;
    };
    return tickets.filter((data) => filterSuccess(data));
  };

  const ticketsWithFilters = filterTickets(tickets);
  const sortArray = [...ticketsWithFilters].sort(sortList[sort]|| cheapSort);
  const arrayTickets = sortArray.slice(0, count);

  return (
    <>
      <div className={classes.content}>
        <Tabs />
        {loading && <TicketLoader />}
        {!loading && errors > 0 && (
          <Alert alert="alert-1-warning" title="Ошибка загрузки билетов" content="Некоторые билеты не были загружены" />
        )}
        {arrayTickets.length > 0 &&
          arrayTickets.map((ticket) => (
            <Card
              key={`${ticket.price}${ticket.carrier}${ticket.segments[0].origin}${ticket.segments[0].duration}`}
              ticket={ticket}
            />
          ))}
        {!loading && arrayTickets.length === 0 && (
          <Alert alert="alert-3-danger" title="Билеты по заданным фильтрам не найдены" />
        )}
        {sortArray.length > count && (
          <div onClick={() => addTickets()} className={classes['search-button']}>
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
          </div>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tickets: state.data,
    count: state.availableTicketCount,
    sort: state.sort,
    filters: state.filters,
    errors: state.errorCounter,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTickets: () => ({ type: 'ADD_COUNT' })
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(Content);
