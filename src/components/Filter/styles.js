import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0 60px 0;

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

export const Filters = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    background: #404040;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin-right: 20px;
    cursor: pointer;

    &:last-child {
      margin: 0;
    }

    &:hover {
      background: #595959;
      color: #fff;
    }

    &:active {
      background: #0d0d0d;
    }
  }
`;
