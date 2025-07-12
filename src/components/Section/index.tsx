import * as S from './styles'
export type Props = {
  title: string
  background: 'gray' | 'black'
  children?: React.ReactNode
}

const Section = ({ title, background, children }: Props) => (
  <S.Container background={background}>
    <div className="S.container">
      <S.Title>{title}</S.Title>
      {children}
    </div>
  </S.Container>
)

export default Section
