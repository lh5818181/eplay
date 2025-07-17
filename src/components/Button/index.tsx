import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  tittle: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({
  type,
  tittle,
  to,
  onClick,
  children,
  disabled,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        variant={variant}
        type={type}
        tittle={tittle}
        onClick={onClick}
        disabled={disabled}
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
