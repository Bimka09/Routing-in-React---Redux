import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';

const App: React.FC = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<HomePage/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );

export default App;
