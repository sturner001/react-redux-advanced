import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 1, title: 'My First Product', price: 6, description: 'A nice product!' },
  { id: 2, title: 'My Second Product', price: 2, description: 'Another nice product!' },
  { id: 3, title: 'My Third Product', price: 4, description: 'Yet another nice product!' },
  { id: 4, title: 'My Fourth Product', price: 9, description: 'An even nicer product!' }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />))}
      </ul>
    </section>
  );
};

export default Products;
