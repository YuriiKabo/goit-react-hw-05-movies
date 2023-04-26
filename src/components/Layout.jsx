import React from 'react';
import { Outlet } from 'react-router-dom';
// import Box from '@mui/material/Box';

import Header from './Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
