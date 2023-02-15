/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

export function CustomProductsProvider(props) {
  const [filterText, setFilterText] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleFilterText = (event) => {
    setFilterText(event.target.value);
  };

  useEffect(() => {
    fetch('../../data/products.json')
      .then((response) => response.json())
      .then((parsedData) => setProducts(parsedData.data.nodes));
  }, []);

  useEffect(() => {
    fetch('../../data/products.json')
      .then((response) => response.json())
      .then((parsedJson) => parsedJson.data.nodes)
      .then((products) => setCategories(
        Array.from(new Set(products.map((product) => product.category.name))),
      ));
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        categories,
        handleFilterText,
        filterText,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

CustomProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
