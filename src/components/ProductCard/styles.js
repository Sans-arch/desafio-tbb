import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0d0d0d;
  color: #fff;
  height: 300px;
  width: 500px;
  margin: 0 50px 50px 0;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.54);

  img {
    width: 120px;
  }

  // Mobile configs
  @media (max-width: 600px) {
    margin: 0;
    width: 90%;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const ProductImg = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  img {
    margin: 0;
    padding: 0;
  }
`;

export const ProductContent = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  h3 {
    font-size: 16px;
  }
`;
