import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Toaster } from 'react-hot-toast'
import 'animate.css/animate.min.css'
import './index.css'
import Router from './routes/Router'
import AuthProvider from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
      <Toaster position="top-right" />
    </AuthProvider>
  </StrictMode>,
)
