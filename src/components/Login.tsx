import React, { useState } from 'react';
import { Button, TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';

function Login() {

  const [inputText, setInputText] = useState<string>('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({ name: inputText }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }


  return (
    <div>
      <h1>Вход</h1>
      
      <TextField label="Логин" variant="outlined" />
      
      <TextField
        label="Пароль"
        variant="outlined"
        type="password"
        value={inputText}
        onChange={handleInputChange}
      />
      
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Войти
      </Button>
    </div>
  );
}

export default Login;