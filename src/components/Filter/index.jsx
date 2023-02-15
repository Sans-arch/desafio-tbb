import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import { Container, Filters } from './styles';
import Input from '../Input';

export default function Filter() {
  const {
    handleFilterText, handleSelectedProductFilter, categories,
  } = useContext(ProductsContext);

  return (

    <Container>
      <Input
        type="text"
        placeholder="Busque por..."
        onChange={handleFilterText}
      />
      <Filters>
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            value={category}
            onClick={handleSelectedProductFilter}
          >
            {category}
          </button>
        ))}
      </Filters>
    </Container>
  );
}
