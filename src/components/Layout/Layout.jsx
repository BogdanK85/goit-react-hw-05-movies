import { HeaderWrap } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wraper } from './Layout.styled';

export const Layout = () => {
  return (
    <Wraper>
      <HeaderWrap />
      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Wraper>
  );
};
