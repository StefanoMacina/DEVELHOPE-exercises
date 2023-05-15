import React from 'react';
import { useForm } from '../Hooks/useForm';

export function Form() {
  const { username, password, handleChange } = useForm();

  return (
    <div>
      <label htmlFor="username">USERNAME</label>
      <input type="text" name="username" value={username} onChange={handleChange} />
      <label htmlFor="password">PASSWORD</label>
      <input type="password" name="password" value={password} onChange={handleChange} />
    </div>
  );
}

export default Form;