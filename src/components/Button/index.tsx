import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  tittle: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, tittle, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={tittle} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={tittle}>
      {children}
    </ButtonLink>
  )
}
export default Button
