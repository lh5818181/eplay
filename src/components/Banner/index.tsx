import { Imagem, Titulo, Preco } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
          <Preco>
            De <span>R$ 250,00</span> <br />
            por apenas R$ 99,90
          </Preco>
        </div>
        <Button
          type="link"
          tittle="Clique aqui para aproveitar esta oferta"
          to="/produto"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
