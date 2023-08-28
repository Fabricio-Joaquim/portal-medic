import React from 'react';

const RegisterMedication = React.lazy(() => import('../pages/RegisterMedication'));
const Login = React.lazy(() => import('../pages/Login'));
const Home = React.lazy(() => import('../pages/Home'));

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
    {
        path: "/register-medication",
        component: RegisterMedication,
        exact: true,
        private: true,
    },
];
