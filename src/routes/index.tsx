import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LayerPrivate } from '@components/LayerPrivateScreen';
import { Loading } from '@components/Loading';
import { RouterList } from "./routesList";
import React from 'react';
import { PrivateRoute } from './private';

const App = () => {

  return (
    <Router>
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
    </Router>
  );
};

export default App;