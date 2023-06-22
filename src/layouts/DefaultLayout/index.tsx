/**                        Layouts
 * Neste layout, o header como se repete em todas as páginas,
 * é apenas chamado na div, o que muda de pagina para pagina,
 * vai ser substituir o Outlet para cada página.
 */

import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

// Import do LayoutContainer
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
