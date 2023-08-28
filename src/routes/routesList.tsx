import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));

export const RouterList = [
    {
        path: "/",
        component: Login,
        exact: true,
        private: false,
    },
    {
        path: "/home",
        component: Home,
        exact: true,
        private: true,
    },
];
