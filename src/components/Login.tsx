import React, { useState } from 'react';
import { Button, TextField } from '@mui/material'
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import { useNavigate  } from 'react-router-dom';

function Login() {

  const [inputText, setInputText] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = () => {
    dispatch(setUser({ name: inputText }));
    navigate("/");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }


  return (
    <div>
      <h1>Вход</h1>
      
      <TextField label="Логин" 
        variant="outlined"        
        value={inputText}
        onChange={handleInputChange} />
      
      <TextField
        label="Пароль"
        variant="outlined"
        type="password"
      />
      
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Войти
      </Button>
    </div>
  );
}

export default Login;