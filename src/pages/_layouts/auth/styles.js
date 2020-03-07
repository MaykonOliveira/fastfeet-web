import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  border-radius: 4px;
  text-align: center;
  background: #fff;

  img {
    width: 300px;
    padding: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 15px;

    input {
      width: 100%;
      height: 44px;
      padding: 0 15px;
      border: 1px solid #999;
      border-radius: 4px;
      margin: 0 0 15px;
      &::placeholder {
        color: #999;
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      margin-bottom: 20px;
      &:hover {
        background: ${darken(0.08, '#7d40e7')};
      }
    }
  }
`;
