import React, { useState } from 'react';
import { loginFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';

const fields = loginFields;
const fieldsState = Object.fromEntries(fields.map(field => [field.name, '']));

const Login = ({ openModal }) => {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/auth/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginState.email,
          password: loginState.password,
        }),
      });

      const responseData = await response.json();
      if (response.status !== 200) {
        openModal(responseData.error);
      } else {
        const userInfo = {
          user: responseData.user,
          token: responseData.token,
        };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        window.location.reload();
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setLoginState(fieldsState);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Input
          key={field.id}
          handleChange={handleChange}
          value={loginState[field.name]}
          labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
};

export default Login;
