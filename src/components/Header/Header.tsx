import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { logoutAction } from '../../redux/slices/auth.slice';
import { setPage } from '../../redux/slices/page.slice';
import { Container, Logo, Text, Wrapper } from './Styles';

const Header: React.FC = () => {
  const auth = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(logoutAction());
    navigate('/');
  };

  const handlePageChange = (newPage: string) => {
    dispatch(setPage(newPage));
  };

  return (
    <Container>
      <Wrapper margin="0 1em 0 3em" padding="1em">
        <Link onClick={() => handlePageChange('home')} to="/">
          <Logo src="/img/logo.svg" />
        </Link>
      </Wrapper>

      <Wrapper flexDirection="row" alignItems="center" padding="1em">
        <Wrapper padding="1em" margin="0 1em 0 1em">
          <Link onClick={() => handlePageChange('system')} to="/system">
            <Text>Суть системы</Text>
          </Link>
        </Wrapper>
        <Wrapper padding="1em" margin="0 1em 0 1em">
          <Link onClick={() => handlePageChange('faq')} to="/faq">
            <Text>ЧаВо</Text>
          </Link>
        </Wrapper>
        <Wrapper padding="1em" margin="0 1em 0 1em">
          <Link onClick={() => handlePageChange('recipes')} to="/recipes">
            <Text>Рецепты</Text>
          </Link>
        </Wrapper>
        <Wrapper padding="1em" margin="0 1em 0 1em">
          <a href="https://shop.uglevodov.net">
            <Text>Магазин</Text>
          </a>
        </Wrapper>
      </Wrapper>

      {auth.isLogged ? (
        <Wrapper
          padding="1em 3em 1em 3em"
          flexDirection="row"
          alignItems="center"
          background="linear-gradient(180deg, rgba(255, 241, 165, 0.55) 0%, 
          rgba(255, 90, 0, 0) 100%), linear-gradient(270deg, #FFC452 0%, 
          #FF4157 100%);"
        >
          <Wrapper padding="1em">
            <Link to="/personal">
              <Text>
                {auth.user?.firstName} {auth.user?.lastName}
              </Text>
            </Link>
          </Wrapper>
          <Wrapper padding="1em">
            <Link to="#" onClick={handleLogout}>
              <Text>Выйти</Text>
            </Link>
          </Wrapper>
        </Wrapper>
      ) : (
        <Wrapper
          flexDirection="row"
          alignItems="center"
          padding="1em 3em 1em 3em"
          background="linear-gradient(180deg, rgba(255, 241, 165, 0.55) 0%, 
          rgba(255, 90, 0, 0) 100%), linear-gradient(270deg, #FFC452 0%, 
          #FF4157 100%);"
        >
          <Wrapper padding="1em">
            <Link to="/register">
              <Text>Регистрация</Text>
            </Link>
          </Wrapper>
          <Wrapper padding="1em">
            <Link to="/login">
              <Text>Войти</Text>
            </Link>
          </Wrapper>
        </Wrapper>
      )}
    </Container>
  );
};

export default Header;
