import React ,{useState}from 'react'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import App from '../App'
function Wrapper() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <React.StrictMode>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  </React.StrictMode>
  )
}

export default Wrapper