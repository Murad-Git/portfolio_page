import classes from './Product.module.scss';

const Product: React.FC<{ img: string; link: string }> = ({ link, img }) => {
  return (
    <div className={classes.p}>
      <div className={classes['p-browser']}>
        <div className={classes['p-circle']}></div>
        <div className={classes['p-circle']}></div>
        <div className={classes['p-circle']}></div>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='' className={classes['p-img']} />
      </a>
    </div>
  );
};

export default Product;
