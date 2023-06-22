import { Routes, Route } from 'react-router-dom'

// Paginas
import { Home } from './pages/Home'
import { History } from './pages/History'

// Import do Layout
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    /** Rotas no React usando o React Router DOM
     *  Primeiro Coloca o Routes em Volta das Rotas
     *  Declara uma rota com o Route e nos parametros coloca o caminho da rota
     *  O parametro element recebe o componente a ser carregado pela rota.
     */
    <Routes>
      {/** A route com o DefaultLayout tem como valor do parametro path o "/",
       *   porque o layout vai ser aplicado a todas as rotas
       */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
