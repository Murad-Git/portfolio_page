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
        +1 2345 678 99
      </div>
      <div className={classes.item}>
        <a href='mailto:blank@blank.com'>
          <FontAwesomeIcon icon={faAt} className={classes.icon} />
          mmurad.kos@gmail.com
        </a>
      </div>
      <div className={classes.item}>
        <FontAwesomeIcon icon={faAddressBook} className={classes.icon} />
        Warsaw, Poland
      </div>
    </>
  );
};

export default Icons;
