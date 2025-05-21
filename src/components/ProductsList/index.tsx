import Product from '../Product'

import { Container, Listagem } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <Listagem>
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="Windows"
            title="nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="Windows"
            title="nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="Windows"
            title="nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="Windows"
            title="nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150,00']}
            system="Windows"
            title="nome do jogo"
          />
        </Listagem>
      </div>
    </Container>
  )
}
export default ProductsList
