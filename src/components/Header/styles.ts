import styled from 'styled-components'
import { brackpoints, Cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${Cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${Cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  > div {
    display: flex;
    align-items: center;
  }

`
export const Links = styled.a`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`

export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`

export const HamburgerMenu = styled.div`
width: 32px;

span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: ${Cores.branca};
  margin-bottom: 4px;
  }

  @media (min-width: ${brackpoints.tablet}) {
    display: none;}
`