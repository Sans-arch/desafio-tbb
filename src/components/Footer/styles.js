import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0d0d;
  padding: 0.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;

  // Mobile configs
  @media (max-width: 600px) {
    padding: 15px 0 15px 0;

    span {
      text-align: center;
      width: 75%;
    }
  }
`;
