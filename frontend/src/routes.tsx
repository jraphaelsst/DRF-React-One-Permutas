import { Route, Routes } from 'react-router-dom'

import PrivateRoute from './utils/PrivateRoute'
import AuthenticatedRedirect from './utils/AuthenticatedRedirect'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Landing from './pages/Landing'
import Home from './pages/Home'

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={
            <AuthenticatedRedirect>
              <Login />
            </AuthenticatedRedirect>
          }
        />
        <Route
          path="/cadastro"
          element={
            <AuthenticatedRedirect>
              <Cadastro />
            </AuthenticatedRedirect>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}

export default Rotas
