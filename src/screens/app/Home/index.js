import { Text } from "react-native"
import { Container } from "./styles"
import Icon from "../../../assets/add.svg"

const Home = () => {
  return(
    <Container>
      <Text>Home</Text>
      <Icon fill="white" width={50} height={50} />
    </Container>
  )
}

export {Home}