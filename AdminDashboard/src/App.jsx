import React, { useState } from 'react';
import SideNav from './assets/components/Sidenav';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Set up a theme for dark mode
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3b5998', // Facebook blue
      },
    },
    background: {
      default: '#f4f6f8',
    },
    text: {
      primary: '#333',
      secondary: '#555',
    },
    
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideNav darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
