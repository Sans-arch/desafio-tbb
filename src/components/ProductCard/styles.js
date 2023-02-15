import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0d0d0d;
  color: #fff;
  width: 500px;
  margin: 0 10px 20px 0;
  border: none;
  border-radius: 12px;

  img {
    width: 120px;
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
