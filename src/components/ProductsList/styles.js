import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* margin-top: 20px; */
  /* margin-bottom: 20px; */
  /* border: 2px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;

  // Mobile configs
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
`;
