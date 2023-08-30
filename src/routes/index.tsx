import { Route, useNavigate, Routes, useLocation } from 'react-router-dom';
import { LayerPrivate } from '@components/LayerPrivateScreen';
import { RouterEnum } from '../Enum/routerEnum';
import { Loading } from '@components/Loading';
import { RouterList } from "./routesList";
import { useAuth } from '@hooks/useAuth';
import { PrivateRoute } from './private';
import React, { useEffect } from 'react';

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      navigate(pathname)
    }
    if (isAuth && pathname === RouterEnum.LOGIN) {
      navigate(RouterEnum.HOME)
    }
  }
    , [])


  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        {
          RouterList.map((route) => {
            if (route.private) {
              return (
                <Route element={<PrivateRoute />}
                  key={route.path}
                >
                  <Route
                    path={route.path}
                    element={<LayerPrivate><route.component /></LayerPrivate>}
                  />
                </Route>
              );
            } else {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              );
            }
          })
        }
      </Routes>
    </React.Suspense>
  );
};

export default App;