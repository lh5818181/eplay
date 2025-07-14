import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  position: relative;
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;
    }
  }
`

export const HamburgerMenu = styled.div`
  width: 32px;
  cursor: pointer;
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }
`

export const CartButton = styled.button`
  display: flex;
  background: none;
  border: none;
  color: ${colors.white};
  font-weight: bold;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 8px;
  }

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const NavMobile = styled.nav`
  /* Desktop / Tablet: sempre visível em linha */
  position: static;
  max-height: none;
  overflow: visible;
  background: transparent;
  border-radius: 0;
  transition: none;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    /* Mobile: drawer colapsável */
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${colors.gray};
    border-radius: 0 0 16px 16px;
    overflow: hidden;
    z-index: 10;
    max-height: 0;
    transition: max-height 0.3s ease;

    &.is-open {
      max-height: 300px;
    }

    ul {
      display: block; /* empilha vertical no mobile */
    }
  }
`

export const LinkItem = styled.li`
  margin: 0;

  a {
    display: block;
    padding: 16px;
    text-align: center;
    color: ${colors.white};
    text-decoration: none;
    border-bottom: 1px solid ${colors.gray};
  }

  &:last-child a {
    border-bottom: none;
  }

  @media (min-width: ${breakpoints.tablet}) {
    a {
      border: none;
      padding: 0 16px;
    }
  }
`
