import Product from './Product';
import classes from './ProductList.module.scss';
import { products } from '../../data/projects';
import { useView } from '../hooks/use-view';

const ProductList = () => {
  const { ref, isVisible } = useView();

  return (
    <section className={classes.pl} id='projects'>
      <div ref={ref} className={classes['pl-texts']}>
        {isVisible && <h1 className={classes['pl-title']}>My Projects</h1>}
      </div>
      <ul ref={ref} className={classes['pl-list']}>
        {products.map((product) => (
          <Product img={product.img} link={product.link} key={product.id} />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
