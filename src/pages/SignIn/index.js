import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit({ email, password }) {
    try {
      await schema.validate({ email, password }, { abortEarly: false });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }

    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Fastfeet" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
}
