import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'
// import { SocketContextProvider } from './context/SocketContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
      <App />
      </SocketContextProvider>
    
    </AuthContextProvider>
    
    </BrowserRouter>
    
  </StrictMode>,
)
