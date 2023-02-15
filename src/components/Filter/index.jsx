import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import { Container, Filters } from './styles';
import Input from '../Input';

export default function Filter() {
  const { handleFilterText, categories } = useContext(ProductsContext);
  // console.log(categories);

  return (

    <Container>
      <Input
        type="text"
        placeholder="Busque por..."
        onChange={handleFilterText}
      />
      <Filters>
        {categories.map((category) => (
          <button type="button" key={category}>
            {category}
          </button>
        ))}
      </Filters>
    </Container>
  );
}
