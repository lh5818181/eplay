import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams<{ id: string }>()
  // ⚠️ Skip a query enquanto não tiver id válido:
  const {
    data: game,
    isLoading,
    isError
  } = useGetGameQuery(id ?? '', { skip: !id })

  if (!id) {
    return <h3>ID do jogo não encontrado.</h3>
  }
  if (isLoading) {
    return <h3>Carregando...</h3>
  }
  if (isError || !game) {
    return <h3>Erro ao buscar o jogo.</h3>
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
