import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  padding: 1rem;

  img {
    width: 130px;

    &:hover {
      opacity: 0.85;
    }
  }

  // Mobile configs
  @media (max-width: 600px) {
    position: static;
  }
`;
