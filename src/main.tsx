import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, } from 'react-router-dom';
import Router from './routes.tsx';
import { AlertProvider } from './context/AlertContext.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AlertProvider>
        <Router />
      </AlertProvider>
    </BrowserRouter>
  </StrictMode>,
)
