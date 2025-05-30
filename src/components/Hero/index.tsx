import React from 'react'
import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { BannerHero, Infos } from './styles'

const Hero: React.FC = () => (
  <BannerHero style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>

      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          por apenas R$ 190,90
        </p>
        <Button
          type={'button'}
          tittle={'Clique para adicionar este jogo ao carrinho'}
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </BannerHero>
)

export default Hero
