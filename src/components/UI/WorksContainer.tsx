import classes from './WorksContainer.module.scss';
import { worksFc } from '../../data/projects';

const WorksContainer = () => {
  const worksList = worksFc(classes.img);
  return (
    <>
      {worksList.map((work) => (
        <div className={classes.container} key={work.id}>
          <div className={classes.item}>
            <div className={classes.left}>
              <div className={classes.leftContainer}>
                <div className={classes.imgContainer}>{work.icon}</div>
                <h2>{work.title}</h2>
                <p>{work.desc}</p>
                <span>
                  <a href='#projects'>Projects</a>
                </span>
              </div>
            </div>
            <div className={classes.right}>{work.img}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorksContainer;
