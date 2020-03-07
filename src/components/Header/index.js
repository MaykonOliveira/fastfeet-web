import React from 'react';

import { Container, Content, Profile, NavLink } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <NavLink to="/orders" active>
            ENCOMENDAS
          </NavLink>
          <NavLink to="/orders">ENTREGADORES</NavLink>
          <NavLink to="/orders">DESTINATÁRIOS</NavLink>
          <NavLink to="/orders">PROBLEMAS</NavLink>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <button type="button" onClick={() => {}}>
                Sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
