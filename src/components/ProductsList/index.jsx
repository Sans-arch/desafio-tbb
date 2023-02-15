import { useState, useEffect } from 'react';

import ProductCard from '../ProductCard';
import { ProductsContainer } from './styles';

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('../../data/products.json')
      .then((response) => response.json())
      .then((parsedData) => setProducts(parsedData.data.nodes));
  }, []);

  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </ProductsContainer>
  );
}
