import styled from 'styled-components'
import { Cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;

  margin-top: ${(props) => props.marginTop || '0'};
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    backgroud-color: ${Cores.branca};
    border: 1px solid ${Cores.branca};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
