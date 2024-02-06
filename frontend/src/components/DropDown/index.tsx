import { Container, Title } from './styles'

type Props = {
  id: string
  title: string
}

const DropDown = ({ id, title }: Props) => {
  return (
    <Container id={id}>
      <Title>{title}</Title>
    </Container>
  )
}

export default DropDown
