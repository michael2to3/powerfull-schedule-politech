import React from 'react';
import './App.css';
import TopToolbar from './components/TopToolbar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import About from './About';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TopToolbar />
        <Box sx={{ py: 10, justifyContent: 'center', px: 5 }}>
          <About />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
