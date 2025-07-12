import styled from 'styled-components'
import { brackpoints, colors } from '../../styles'

export const Links = styled.a`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${brackpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${brackpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;}
    }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${brackpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`

export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${brackpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const HamburgerMenu = styled.div`
  width: 32px;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${brackpoints.tablet}) {
    display: none;
  }
`
