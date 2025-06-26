import React from 'react'
import Button from '../Button'
import Tag from '../Tag'
import { BannerHero, Infos } from './styles'
import { Game } from '../../pages/Home'

import { formataPreco } from '../ProductsList'
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
    <BannerHero style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>
                <span>Por {formataPreco(game.prices.current)}</span>
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
        </Infos>
      </div>
    </BannerHero>
  )
}

export default Hero
