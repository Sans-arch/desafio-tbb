import styled from 'styled-components';

export const Container = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  padding: 60px 0 60px 0;

  /* margin-top: 40px; */
  /* margin-bottom: 40px; */

  input {
    width: 30%;
  }

  // Mobile configs
  @media (max-width: 600px) {
    input {
      width: 85%;
    }
  }
`;
