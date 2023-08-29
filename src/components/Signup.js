import React, { useState } from 'react';
import { signupFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

const fields = signupFields;
const fieldsState = {};

fields.forEach((field) => (fieldsState[field.name] = ''));

const Signup = ({ openModal }) => {
  const navigate = useNavigate();
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    createAccount();
  };

  const createAccount = async () => {
    const { email, username, tel, address, password, confirmpassword } = signupState;
    const requestData = {
      email,
      username,
      password,
      address,
      tel,
      name: username,
      confirmpassword,
    };

    if(password != confirmpassword){
      alert('passwords don\'t match!');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/auth/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();

      if (response.status !== 201) {
        openModal('An Error occurred, please try again');
      } else {
        openModal(`Registered Name =>  : ${responseData.name}`);
        navigate('/', { replace: true });
        setSignupState(fieldsState);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setSignupState(fieldsState);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Input
          key={field.id}
          handleChange={handleChange}
          value={signupState[field.id]}
          labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
      <FormAction handleSubmit={handleSubmit} text="Signup" />
    </form>
  );
};

export default Signup;
