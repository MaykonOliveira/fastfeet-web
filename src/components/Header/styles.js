import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      width: 150px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.7);
    }
    button {
      border: none;
      background: none;
      display: block;
      margin-top: 5px;
      font-size: 12px;
      color: red;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: bold;
  color: #a0a0a0;

  & + a {
    margin-left: 20px;
  }
`;
