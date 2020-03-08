import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import { Container, Badge, ActionsList } from './styles';

export default function MoreMenu() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz size={20} />
      </Badge>

      <ActionsList visible={visible}>
        <span>Visualizar</span>
      </ActionsList>
    </Container>
  );
}
