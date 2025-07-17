import React from 'react'
import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'

import { parseToBrl } from '../../utils'
import { useDispatch } from 'react-redux'

import { addItem, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero: React.FC<Props> = ({ game }) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(addItem(game))
    dispatch(open())
  }

  return (
    <S.BannerHero style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>
                <span>Por {parseToBrl(game.prices.current)}</span>
              </>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              tittle={'Clique para adicionar este jogo ao carrinho'}
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.BannerHero>
  )
}

export default Hero
