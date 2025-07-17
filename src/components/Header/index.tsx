import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import * as S from './styles'
import logo from '../../assets/images/logo vetor.svg'
import cartIcon from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.HamburgerMenu onClick={() => setIsMenuOpen((prev) => !prev)}>
            <span />
            <span />
            <span />
          </S.HamburgerMenu>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>

          <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
            <ul>
              <S.LinkItem>
                <Link
                  title="Categorias"
                  to="/categories"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Em breve"
                  to="/#coming-soon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Em breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Promoções"
                  to="/#on-sale"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </ul>
          </S.NavMobile>
        </div>

        <S.CartButton role="button" onClick={openCart}>
          {items.length}
          <span>- produto(s)</span>
          <img src={cartIcon} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
    </S.HeaderBar>
  )
}

export default Header
