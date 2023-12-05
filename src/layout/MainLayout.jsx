import React from 'react'
import { Outlet } from 'react-router-dom'
import App from '../App'
import Container from '../components/shared/Container/Container';

const MainLayout = ({children}) => {
  return (
    <div className="bg-black h-screen">
     
     
      <Outlet />
    </div>
  );
}

export default MainLayout