import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useGlobal from '../../hooks/useGlobal';

import { Form, FormGroup, FormWrapper, Error } from './styled';

function LoginPage() {
  const { globalState, login } = useGlobal(),
    history = useHistory(),
    [username, setUsername] = useState(''),
    [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    await login(username, password);
    if (globalState.authenticated) {
      history.push('/');
    }
  }

  return (
    <FormWrapper>
      <h1>Welcome back!</h1>
      {globalState.error ? <Error>{globalState.error}</Error> : ''}
      <Form onSubmit={(event) => handleSubmit(event)} className="login-form">
        <FormGroup className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input
              required
              type="text"
              id="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </label>
        </FormGroup>
        <FormGroup className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </FormGroup>
        <button type="submit">login</button>
      </Form>
    </FormWrapper>
  );
}

export default LoginPage;
