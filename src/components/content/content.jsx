import Card from '../card/card';
import Tabs from '../tabs/tabs';

import classes from './content.module.scss';

function Content() {
  return (
    <>
      <div className={classes.content}>
        <Tabs />
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>

        <div className={classes['search-button']}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</div>
      </div>
    </>
  );
}

export default Content;
