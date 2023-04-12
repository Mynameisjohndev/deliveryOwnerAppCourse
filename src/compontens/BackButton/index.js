import { BackButtonContainer } from "./styles";
import Back from "../../assets/Back.svg";

const BackButton = ({goBack}) => {
  return (
    <BackButtonContainer {...{
      onPress: () => goBack()
    }}> 
      <Back />
    </BackButtonContainer>
  )
}

export { BackButton }