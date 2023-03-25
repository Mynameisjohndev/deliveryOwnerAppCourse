import { ActivityIndicator } from "react-native"
import { BackgroundContainer } from "../../../global"
import { LoadText } from "./styles"

const LoadScreen = ( ) => {
  return(
    <BackgroundContainer>
      <LoadText>Carregando dados...</LoadText>
      <ActivityIndicator
        {...{
          size: "large",
          color: "white"
        }}
      />
    </BackgroundContainer>
  )
}

export { LoadScreen }