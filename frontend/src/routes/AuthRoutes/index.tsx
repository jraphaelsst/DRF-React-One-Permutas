import { Route, Routes } from 'react-router-dom'

import Login from '../../pages/Login'
import Cadastro from '../../pages/Cadastro'

const AuthRotas = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  )
}

export default AuthRotas
