import { ButtonContainer, ButtonText } from "./styles"
import { ActivityIndicator } from "react-native"

const Button = ({
  title,
  type,
  loading,
  ...rest
}) => {
  return (
    <ButtonContainer {...rest} type={type}>
      {loading ? (
        <ActivityIndicator size="small" color="white"/>
      ) : (
        <ButtonText>
          {title}
        </ButtonText>
      )}
    </ButtonContainer>
  )
}

export { Button }