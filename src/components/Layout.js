import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { LoginHeader } from 'components/ContactsHeader/ContactsHeader';
import { useAuth } from '../hooks/useAuth';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { Container } from './AppStyled';

export const Layout = () => {
  const user = useSelector(selectUser);
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      {isLoggedIn ? <LoginHeader email={user.email} /> : <Header />}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
