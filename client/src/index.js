import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import { CssBaseline } from '@mui/material';
import { Canvas } from '@react-three/fiber'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Canvas>
        <App />
      </Canvas>
    </ThemeProvider>
  </React.StrictMode>
);

