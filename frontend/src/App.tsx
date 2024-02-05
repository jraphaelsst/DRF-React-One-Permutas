import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalCss } from './styles'

import { AuthProvider } from './context/AuthContext'
import Rotas from './routes'

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalCss />
        <Rotas />
      </AuthProvider>
    </Router>
  )
}

export default App
