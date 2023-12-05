import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainLayout from './layout/MainLayout.jsx'
import { RouterProvider } from 'react-router-dom'
import { appRoutes } from './routes/appRoutes.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoutes}>   
  </RouterProvider>
);
