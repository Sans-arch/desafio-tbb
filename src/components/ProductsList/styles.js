import styled from 'styled-components';

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  background: #0d0d0d;
  color: #fff;
  width: 600px;
  border: 2px solid black;

  & + & {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
