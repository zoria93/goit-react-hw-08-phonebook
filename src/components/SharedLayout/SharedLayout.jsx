import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { Container, Header } from 'components/SharedLayout/SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
