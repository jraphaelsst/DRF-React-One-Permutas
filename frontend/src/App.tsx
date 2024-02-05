import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalCss } from './styles'

import { AuthProvider } from './context/AuthContext'
import AuthRotas from './routes/AuthRoutes'

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalCss />
        <AuthRotas />
      </AuthProvider>
    </Router>
  )
}

export default App
