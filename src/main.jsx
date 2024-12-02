import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { LibrosProvider } from './Context/LibrosProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LibrosProvider>
      <App />
    </LibrosProvider>
  </StrictMode>,
)
