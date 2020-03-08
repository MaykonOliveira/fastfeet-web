import React from 'react';
import { MdSearch, MdAdd, MdMoreHoriz } from 'react-icons/md';

import { Container, Search } from './styles';

export default function Orders() {
  return (
    <Container>
      <strong>Gerenciando encomendas</strong>

      <div>
        <Search>
          <button type="button">
            <MdSearch size={16} color="#A7A7A7" />
          </button>
          <input placeholder="Buscar por encomendas" />
        </Search>
        <button type="button">
          <MdAdd size={16} color="#fff" />
          <span>CADASTRAR</span>
        </button>
      </div>

      <table>
        <tr>
          <th>ID</th>
          <th>Destinatário</th>
          <th>Entregador</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
        <tr>
          <td>#01</td>
          <td>Ludwig van Beethoven</td>
          <td>
            <img
              src="https://api.adorable.io/avatars/40/john.png"
              alt="John Doe"
            />
            <span>John Doe</span>
          </td>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <td>
            <div>
              <div />
              <span>ENTREGUE</span>
            </div>
          </td>
          <td>
            <button type="button">
              <MdMoreHoriz />
            </button>
          </td>
        </tr>
      </table>
    </Container>
  );
}
