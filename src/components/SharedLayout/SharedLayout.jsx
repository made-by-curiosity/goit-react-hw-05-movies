import { Suspense } from 'react';
import { Container } from 'components/Container/Container';
import { Outlet } from 'react-router-dom';
import { MenuLink, MenuList, PageHeader } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <PageHeader>
        <nav>
          <MenuList>
            <li>
              <MenuLink to="/">Home</MenuLink>
            </li>
            <li>
              <MenuLink to="/movies">Movies</MenuLink>
            </li>
          </MenuList>
        </nav>
      </PageHeader>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
