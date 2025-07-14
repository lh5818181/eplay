import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  tittle: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  tittle,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        variant={variant}
        type={type}
        tittle={tittle}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={tittle}>
      {children}
    </S.ButtonLink>
  )
}
export default Button
