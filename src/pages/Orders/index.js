import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import MoreMenu from '../../components/MoreMenu';

import {
  Container,
  Search,
  OrdersTable,
  TableHeaderField,
  TableCollumnField,
  DeliverymanField,
  StatusField,
} from './styles';

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

      <OrdersTable>
        <TableHeaderField>
          <strong>ID</strong>
        </TableHeaderField>
        <TableHeaderField>
          <strong>Destinatário</strong>
        </TableHeaderField>
        <TableHeaderField>
          <strong>Entregador</strong>
        </TableHeaderField>
        <TableHeaderField>
          <strong>Cidade</strong>
        </TableHeaderField>
        <TableHeaderField>
          <strong>Estado</strong>
        </TableHeaderField>
        <TableHeaderField>
          <strong>Status</strong>
        </TableHeaderField>
        <TableHeaderField>
          <strong>Ações</strong>
        </TableHeaderField>

        <TableCollumnField>#01</TableCollumnField>
        <TableCollumnField>Ludwig van Beethoven</TableCollumnField>
        <TableCollumnField>
          <DeliverymanField>
            <img
              src="https://api.adorable.io/avatars/40/abott@adorable.pngCopy to Clipboard"
              alt="John Doe"
            />
            <span>John Doe</span>
          </DeliverymanField>
        </TableCollumnField>
        <TableCollumnField>Rio do Sul</TableCollumnField>
        <TableCollumnField>Santa Catarina</TableCollumnField>
        <TableCollumnField>
          <StatusField>
            <div />
            <span>ENTREGUE</span>
          </StatusField>
        </TableCollumnField>
        <TableCollumnField>
          <MoreMenu />
        </TableCollumnField>
      </OrdersTable>
    </Container>
  );
}
