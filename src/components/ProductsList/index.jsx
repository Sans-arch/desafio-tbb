import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import ProductCard from '../ProductCard';
import { ProductsContainer } from './styles';

export default function ProductsList() {
  const { products, filterText, selectedProductFilter } = useContext(ProductsContext);

  if (selectedProductFilter && filterText) {
    return (
      <ProductsContainer>
        {products.filter((product) => (
          product.category.name.toLowerCase() === selectedProductFilter.toLowerCase()
        )).filter((product) => product.name.toLowerCase().includes(filterText.toLowerCase()))
          .map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </ProductsContainer>
    );
  }

  if (selectedProductFilter && !filterText) {
    return (
      <ProductsContainer>
        {products.filter((product) => (
          product.category.name.toLowerCase() === selectedProductFilter.toLowerCase()))
          .map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </ProductsContainer>
    );
  }

  if (filterText && !selectedProductFilter) {
    return (
      <ProductsContainer>
        {products.filter(
          (product) => product.name.toLowerCase().includes(filterText.toLowerCase()),
        )
          .map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </ProductsContainer>
    );
  }

  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </ProductsContainer>
  );
}
