import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import ProductCard from '../ProductCard';
import { ProductsContainer } from './styles';

export default function ProductsList() {
  const { products, filterText, selectedProductFilter } = useContext(ProductsContext);

  return (
    <ProductsContainer>
      {selectedProductFilter && products.filter((product) => (
        product.category.name.toLowerCase() === selectedProductFilter.toLowerCase()))
        .map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}

      {filterText
      && products.filter(
        (product) => product.name.toLowerCase().includes(filterText.toLowerCase()),
      )
        .map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}

      {(!filterText && !selectedProductFilter) && products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </ProductsContainer>
  );
}
