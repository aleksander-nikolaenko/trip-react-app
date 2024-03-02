import { lazy, Suspense } from 'react';

import { Navigate, useRoutes, Outlet } from 'react-router-dom';

import { ROUTES } from 'src/constants/routes.const';

import { PublicRoute, ProtectedRoute } from 'src/components/wrappers';

const LazyNotFoundPage = lazy(() => import('src/pages/NotFoundPage'));
const LazyLoginPage = lazy(() => import('src/pages/LoginPage'));
const LazyMainPage = lazy(() => import('src/pages/MainPage'));

export const AppRoutes = () => {
  const isAuth = true;

  const routes = [
    {
      path: ROUTES.HOME,
      children: [
        {
          element: (
            <PublicRoute
              isAuth={isAuth}
              redirect={ROUTES.MAIN}
            >
              <Outlet />
            </PublicRoute>
          ),
          children: [
            {
              path: '',
              element: (
                <Navigate
                  to={ROUTES.LOGIN}
                  replace={true}
                />
              ),
            },
            {
              path: ROUTES.LOGIN,
              element: (
                <Suspense fallback={<div> Loading...</div>}>
                  <LazyLoginPage />
                </Suspense>
              ),
            },
          ],
        },

        {
          element: (
            <ProtectedRoute
              isAuth={isAuth}
              redirect={ROUTES.LOGIN}
            >
              <Outlet />
            </ProtectedRoute>
          ),

          children: [
            {
              path: ROUTES.MAIN,
              element: <LazyMainPage />,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyNotFoundPage />
        </Suspense>
      ),
    },
  ];

  const routing = useRoutes(routes);

  return routing;
};
