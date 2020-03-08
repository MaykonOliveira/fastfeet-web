import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Profile, NavLinkStyled } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const activeStyle = {
    color: '#333',
  };

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <NavLinkStyled exact to="/orders" activeStyle={activeStyle}>
            ENCOMENDAS
          </NavLinkStyled>
          <NavLinkStyled exact to="/deliverymen" activeStyle={activeStyle}>
            ENTREGADORES
          </NavLinkStyled>
          <NavLinkStyled exact to="/recipients" activeStyle={activeStyle}>
            DESTINATÁRIOS
          </NavLinkStyled>
          <NavLinkStyled exact to="/problems" activeStyle={activeStyle}>
            PROBLEMAS
          </NavLinkStyled>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={() => dispatch(signOut())}>
                Sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
