import classes from './notification.module.scss';

function Alert({ alert, title, content}) {
  return <div className={`${classes.alert} ${classes[alert]}`}>
    <h3 className={classes['alert-title']}>{title}</h3>
    <p className={classes['alert-content']}>{content}</p>
  </div>;
}

export default Alert;
