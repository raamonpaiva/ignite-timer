// Definindo as tipagens do theme. Deixa o Intelisense do VScode mais precisa e reconhece os temas globais

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType { }
}
