import { LayerPrivate } from '@components/LayerPrivateScreen';
import { Route, useNavigate, Routes } from 'react-router-dom';
import { RouterEnum } from '../Enum/routerEnum';
import { Loading } from '@components/Loading';
import { RouterList } from "./routesList";
import { useAuth } from '@hooks/useAuth';
import { PrivateRoute } from './private';
import React, { useEffect } from 'react';

const App = () => {

  const { isAuth } = useAuth()
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
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