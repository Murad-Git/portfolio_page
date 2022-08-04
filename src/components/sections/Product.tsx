import classes from './Product.module.scss';

const Product: React.FC<{ img: string; link: string }> = ({ link, img }) => {
  return (
    <li className={classes.p}>
      <div className={classes['p-browser']}>
        <div className={classes['p-circle']}></div>
        <div className={classes['p-circle']}></div>
        <div className={classes['p-circle']}></div>
      </div>
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className={classes.imageA}
      >
        <img src={img} alt='' className={classes['p-img']} />
      </a>
    </li>
  );
};

export default Product;
