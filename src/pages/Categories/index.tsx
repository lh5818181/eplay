import { Game } from '../../pages/Home'

import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRpg(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesAcao} title={'Ação'} background={'black'} />
      <ProductsList
        games={gamesEsportes}
        title={'Esportes'}
        background={'gray'}
      />
      <ProductsList games={gamesLuta} title={'Luta'} background={'black'} />
      <ProductsList games={gamesRpg} title={'RPG'} background={'gray'} />
      <ProductsList
        games={gamesSimulacao}
        title={'Simulação'}
        background={'black'}
      />
    </>
  )
}

export default Categories
