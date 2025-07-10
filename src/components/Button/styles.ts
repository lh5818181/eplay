import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? Cores.verde : 'transparent'};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? Cores.verde : Cores.branca)};
  color: ${Cores.branca};
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${Cores.branca};
  color: ${Cores.branca};
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
`
