import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </>
);

export default App;
