import React from 'react';

import logo from '../../assets/logo.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Fastfeet" />
      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
