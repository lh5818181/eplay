import { Container, Sectiontitle, Links, Link, FooterSection } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className={'container'}>
        <FooterSection>
          <Sectiontitle>Categorias</Sectiontitle>
          <Links>
            <li>
              <Link
                title="Clique aqui para acessar jogos de RPG"
                to="/categories#rpg"
              >
                RPG
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos de Ação"
                to="/categories#action"
              >
                Ação
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos de Esportes"
                to="/categories#sports"
              >
                Esportes
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos de Simulação"
                to="/categories#simulation"
              >
                Simulação
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos de Luta"
                to="/categories#fight"
              >
                Luta
              </Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <Sectiontitle>Acesso Rápido</Sectiontitle>
          <Links>
            <li>
              <Link
                title="Clique aqui para acessar a seção de promoções"
                to="/#on-sale"
              >
                Promoções
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar a seção de em breve"
                to="/#coming-soon"
              >
                Em breve
              </Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}

export default Footer
