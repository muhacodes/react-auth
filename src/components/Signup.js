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
  const [validationErrors, setValidationErrors] = useState({});

  // const handleChange = (e) =>
  //   setSignupState({ ...signupState, [e.target.name]: e.target.value });
  const handleChange = (e) => {
    // Step 2: Clear the validation error for the changed field
    setValidationErrors({
      ...validationErrors,
      [e.target.name]: '',
    });

    // Step 3: Update the form data
    setSignupState({ ...signupState, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   createAccount();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 4: Check for empty fields and set validation errors
    const requiredFields = ['email', 'username', 'tel', 'address', 'password', 'confirmpassword'];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!signupState[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    // Check if passwords match
    if (signupState.password !== signupState.confirmpassword) {
      newErrors.confirmpassword = 'Passwords do not match';
    }

    if (signupState.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Step 5: If there are validation errors, stop the submission
    if (Object.keys(newErrors).length > 0) {
      setValidationErrors(newErrors);
      return;
    }
    createAccount();

    // Rest of your form submission logic
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

    

    try {
      const response = await fetch('https://muhacodescustomauth.pythonanywhere.com/auth/users/register', {
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
      <div key={field.id}>
        
        <Input
          handleChange={handleChange}
          value={signupState[field.name]}
          labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
        {validationErrors[field.name] && (
          // Step 6: Display validation errors if they exist
          <p className="text-red-500 text-sm">{validationErrors[field.name]}</p>
        )}
      </div>
    ))}
    <FormAction handleSubmit={handleSubmit} text="Signup" />
  </form>
  );
};

export default Signup;
