/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

export function CustomProductsProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('../../data/products.json')
      .then((response) => response.json())
      .then((parsedData) => setProducts(parsedData.data.nodes));
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

CustomProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
