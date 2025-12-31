import { HelmetProvider } from 'react-helmet-async'
import AppRoutes from './routes/routes'

function App() {
  return (
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  )
}

export default App