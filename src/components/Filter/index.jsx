import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

import { Container, Filters } from './styles';
import Input from '../Input';

export default function Filter() {
  const {
    handleFilterText, handleSelectedProductFilter, categories, selectedProductFilter,
  } = useContext(ProductsContext);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Busque por..."
        onChange={handleFilterText}
      />
      <Filters>
        {selectedProductFilter && categories.map((category) => {
          if (category === selectedProductFilter) {
            return (
              <button
                type="button"
                key={category}
                value={category}
                onClick={handleSelectedProductFilter}
                style={{ backgroundColor: '#0d0d0d' }}
              >
                {category}
              </button>
            );
          }

          return (
            <button
              type="button"
              key={category}
              value={category}
              onClick={handleSelectedProductFilter}
            >
              {category}
            </button>
          );
        })}

        {!selectedProductFilter && categories.map((category) => (
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
