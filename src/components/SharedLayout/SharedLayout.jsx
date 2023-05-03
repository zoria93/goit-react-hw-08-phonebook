import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
