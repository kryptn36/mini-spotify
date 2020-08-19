import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const Root = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default Root;
