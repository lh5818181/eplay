import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'
import { parseToBrl } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'
import { addItem, open } from '../../store/reducers/cart'
import * as S from './styles'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  if (isLoading || !game) {
    return <Loader />
  }

  const handleAproveitar = () => {
    navigate(`/product/${game.id}`)
    dispatch(addItem(game))
    dispatch(open())
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="button"
          tittle="Clique aqui para aproveitar esta oferta"
          onClick={handleAproveitar}
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
