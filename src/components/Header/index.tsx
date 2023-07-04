import { HeaderContainer } from './styles'

import { Scroll, Timer } from 'phosphor-react'
import logoIgnite from '../../assets/logo-ignite.svg'

/** Em vez de usar o <a href> , usa o NavLink do react-router-dom, e coloca o destino na propriedade "to="
 *  O Navlink também cria a propriedade active na DOM, que pode ser observada no Dev Tools do navegador,
 *  e pode ser utilizada para dar outro tipo de estilização quando o componente estiver ativo.
 */
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <nav>
        {/** Title é apenas para acessibilidade */}
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
