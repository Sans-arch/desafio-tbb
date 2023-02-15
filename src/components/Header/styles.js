import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.headerBackgroundColor};
  z-index: 10;
  padding: 1rem;

  img {
    width: 130px;

    &:hover {
      opacity: 0.85;
    }
  }

  button {
    background: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;
  }

  // Mobile configs
  @media (max-width: 600px) {
    position: static;
  }
`;
