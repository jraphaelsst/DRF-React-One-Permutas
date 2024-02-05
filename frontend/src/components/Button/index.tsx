import { ButtonContainer } from './styles'

type Props = {
  type: 'button' | 'submit'
  children: string
}

const Button = ({ type, children }: Props) => {
  return <ButtonContainer type={type}>{children}</ButtonContainer>
}

export default Button
