import { useState, useEffect } from 'react';
import { Product } from './styles';

export default function ProductsList() {
  const [products, setProducts] = useState([]); // 33 elementos no total

  useEffect(() => {
    fetch('../../data/products.json')
      .then((response) => response.json())
      .then((parsedData) => setProducts(parsedData.data.nodes));
  }, []);

  return (
    <>
      {products.map((product) => (
        <Product key={product.id}>
          <img src={product.images[0].asset.url} alt={product.images[0].alt} width="100px" />
          <p>{product.name}</p>
          <p>{product.shortDescription}</p>
        </Product>
      ))}
    </>
  );
}
