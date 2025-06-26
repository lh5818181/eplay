import styled from 'styled-components'

import { Props } from '.'
import { Cores } from '../../styles'
import { Card } from '../Product/styles'
import { brackpoints } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? Cores.preta : Cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? Cores.cinza : Cores.preta};
    padding: 12px;
  }
`

export const Listagem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${brackpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${brackpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
