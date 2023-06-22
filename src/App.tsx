import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

// Temas
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

// Rotas
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'

function App() {
  return (
    /** O BrowserRouter Tem que envolver o componente de rotas */
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
