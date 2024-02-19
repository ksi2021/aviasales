import { connect } from 'react-redux';

import Card from '../card/card';
import Tabs from '../tabs/tabs';

import classes from './content.module.scss';

function Content({ tickets, count, addTickets, sort }) {

  const cheapSort = (a, b)=>  a.price - b.price;
  const fastSort = (a, b) =>
    a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);

  const sortArray = [...tickets].sort(sort === 'cheap' ? cheapSort : fastSort);
  const arrayTickets = sortArray.slice(0, count);

  return (
    <>
      <div className={classes.content}>
        <Tabs />
        {
          arrayTickets.map((ticket)=> <Card key={`${ticket.price}${ticket.carrier}${ticket.segments[0].origin}${ticket.segments[0].duration}`} ticket={ticket} />)
        }
        <div onClick={() => addTickets()} className={classes['search-button']}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tickets: state.data,
    count: state.availableTicketCount,
    sort: state.sort,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTickets: () => ({ type: 'ADD_COUNT'}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(Content);
