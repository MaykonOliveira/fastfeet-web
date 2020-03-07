import React from 'react';

import logo from '../../assets/logo.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Fastfeet" />

      <form>
        <strong>SEU E-MAIL</strong>
        <input type="email" placeholder="Seu e-mail" />

        <strong>SUA SENHA</strong>
        <input type="password" placeholder="Sua senha secreta" />
      </form>
    </>
  );
}
