import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider } from '@mantine/core';
import App from './App';
import './index.css';
ReactDOM.render(
  <MantineProvider  >
    <App />
  </MantineProvider>,
  document.getElementById('root')
);