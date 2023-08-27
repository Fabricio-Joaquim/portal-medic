import { Login } from "../../pages/Login"
import { Route } from 'react-router-dom';

const   RoutersPublic = () => {
  return (
      <Route path='/' element={<Login/>} />
  )
}

export default RoutersPublic;