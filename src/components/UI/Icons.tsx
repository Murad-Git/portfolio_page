import classes from './Icons.module.scss';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icons = () => {
  return (
    <>
      <div className={classes.item}>
        <FontAwesomeIcon icon={faPhone} className={classes.icon} />
        +1 1234 556 75
      </div>
      <div className={classes.item}>
        <FontAwesomeIcon icon={faAt} className={classes.icon} />
        contact@lama.dev
      </div>
      <div className={classes.item}>
        <FontAwesomeIcon icon={faAddressBook} className={classes.icon} />
        245 King Street, Touterie Victoria 8520 Australia
      </div>
    </>
  );
};

export default Icons;
