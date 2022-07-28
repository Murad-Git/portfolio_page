import Product from './Product';
import classes from './ProductList.module.scss';
import { products } from '../../data/projects';

const ProductList = () => {
  return (
    <section className={classes.pl} id='projects'>
      <div className={classes['pl-texts']}>
        <h1 className={classes['pl-title']}>Create & inspire. </h1>
        <p className={classes['pl-desc']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          officiis, asperiores explicabo velit ipsum quas!
        </p>
      </div>
      <ul className={classes['pl-list']}>
        {products.map((product) => (
          <Product img={product.img} link={product.link} key={product.id} />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
