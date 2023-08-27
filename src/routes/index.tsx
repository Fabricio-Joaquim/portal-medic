import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { RouterList } from "./routesList";
import React from 'react';

const App = () => {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {
            RouterList.map((route, index) => (
              <Route
                key={`route-${index}`}
                path={route.path}
                element={<route.component />}
              />
            ))
          }
        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default App;