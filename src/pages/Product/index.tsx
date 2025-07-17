import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Loader from '../../components/Loader'
import Gallery from '../../components/Gallery'
import { useGetGameQuery } from '../../services/api'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams

  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />

      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>

      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> {game.details.languages.join(', ')}.<br />
        </p>
      </Section>

      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
