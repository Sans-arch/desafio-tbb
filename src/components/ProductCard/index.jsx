import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ProductCard({ data }) {
  return (
    <Container key={data.id}>
      <img src={data.images[0].asset.url} alt={data.images[0].alt} width="100px" />
      <p>{data.name}</p>
      <p>{data.shortDescription}</p>
    </Container>
  );
}

ProductCard.propTypes = {
  data: PropTypes.object.isRequired,
};
