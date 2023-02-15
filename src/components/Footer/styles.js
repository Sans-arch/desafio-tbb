import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  padding: 0.5rem;

  // Mobile configs
  @media (max-width: 600px) {
    padding: 15px 0 15px 0;

    span {
      text-align: center;
      width: 75%;
    }
  }
`;
