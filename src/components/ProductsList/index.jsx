import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import ProductCard from '../ProductCard';
import { ProductsContainer } from './styles';

export default function ProductsList() {
  const { products } = useContext(ProductsContext);

  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </ProductsContainer>
  );
}
