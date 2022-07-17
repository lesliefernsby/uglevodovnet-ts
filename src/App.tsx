import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';

import Home from './components/Home/Home';
import Header from './components/Header/Header';

import GlobalStyle from './styles/global';
import HeaderImage from './components/Header/HeaderImage';
import { Faq } from './components/Faq/Faq';
import { useAppSelector } from './redux/hooks';
import System from './components/System/System';
import { Recipes } from './components/Recipes/Recipes';

const App: React.FC = () => {
  const { page } = useAppSelector(state => state.page);

  return (
    <>
      <GlobalStyle />
      <Header />
      <HeaderImage page={page} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/system" element={<System />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </>
  );
};

export default App;
