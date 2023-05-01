import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
const SharedLayout = () => {
  return (
    <container>
      <header>
        <Navigation />
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </container>
  );
};

export default SharedLayout;
