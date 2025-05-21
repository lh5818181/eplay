import { Imagem, Titulo, Preco } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'

const Banner = () => {
  return (
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Preco>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Preco>
      </Imagem>
    </div>
  )
}

export default Banner
