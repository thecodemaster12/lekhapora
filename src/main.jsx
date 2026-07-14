import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import MathPage from './pages/MathPage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import AdditionPage from './pages/AdditionPage.jsx'
import './i18n'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/math',
        element: <MathPage />,
      },
      {
        path: '/math/addition',
        element: <AdditionPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
