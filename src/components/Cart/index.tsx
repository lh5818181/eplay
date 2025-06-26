import Button from '../Button'
import {
  Overlay,
  CartContainer,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'

import starwars from '../../assets/images/star wars.png'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <CartItem>
          <img src={starwars} />
          <div>
            <h3>Nome do produto</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={starwars} />
          <div>
            <h3>Nome do produto</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 250,00 <span>Em até 6x sem juros</span>
      </Prices>
      <Button type="button" tittle="Clique aqui para continuar com a compra">
        Continuar com a compra
      </Button>
    </SideBar>
  </CartContainer>
)

export default Cart
