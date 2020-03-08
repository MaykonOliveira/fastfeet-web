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

export const OrdersTable = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const TableHeaderField = styled.div`
  padding: 10px;

  strong {
    font-size: 15px;
  }
`;

export const TableCollumnField = styled.div`
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: #fff;
  margin-bottom: 10px;
`;

export const DeliverymanField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 4px;
  }
`;

export const StatusField = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${lighten(0.45, '#42a42d')};

  div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #42a42d;
    margin: 0 auto;
  }

  span {
    color: #42a42d;
    font-size: 10px;
    font-weight: bold;
    margin-left: 4px;
  }
`;
