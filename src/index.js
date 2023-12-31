import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    background: '#efefef',
    white: '#fff',
    green: '#3cb371',
    grey: 'rgba(128, 128, 128, 0.3)',
    blue: '#3cb371',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies"> 
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
