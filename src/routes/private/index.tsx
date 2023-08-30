import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUserData } from "@hooks/useUserData"

const PrivateRoute = () => {
    const { token } = useUserData()
    return token ? <Outlet /> : <Navigate to="/" />
}
export { PrivateRoute }
