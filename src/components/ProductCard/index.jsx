import PropTypes from 'prop-types';

import {
  ProductContainer, ProductData, ProductImg, ProductContent,
} from './styles';

export default function ProductCard({ data }) {
  return (
    <ProductContainer key={data.id}>
      <ProductData>
        <ProductImg>
          <img
            src={data.images[0].asset.url}
            alt={data.images[0].alt}
          />
        </ProductImg>
        <ProductContent>
          <h3>{data.name}</h3>
          <p>{data.shortDescription}</p>
        </ProductContent>
      </ProductData>
    </ProductContainer>
  );
}

ProductCard.propTypes = {
  data: PropTypes.object.isRequired,
};
