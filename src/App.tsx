import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import Home from './components/home'

function App() {
  const theme = createMuiTheme({
    // spacing: 16,
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
