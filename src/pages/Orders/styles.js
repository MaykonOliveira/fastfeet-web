import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #444444;
  margin: 30px 90px;

  strong {
    font-size: 20px;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    justify-content: space-between;

    ~ button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 0 0;
      height: 30px;
      padding: 6px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 12px;
      transition: background 0.2s;
      margin-bottom: 20px;
      &:hover {
        background: ${darken(0.08, '#7d40e7')};
      }
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: #fff;
  height: 30px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 0;
    padding: 6px;
    &:hover {
      background: ${darken(0.02, '#fff')};
    }
  }

  input {
    border: 0;
    padding: 5px 10px;
    color: #444444;
    &::placeholder {
      color: ${lighten(0.3, '#444444')};
    }
  }
`;
