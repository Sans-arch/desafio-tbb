import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import { Container } from './styles';
import Input from '../Input';

export default function Filter() {
  const { handleFilterText } = useContext(ProductsContext);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Busque por..."
        onChange={handleFilterText}
      />
    </Container>
  );
}
