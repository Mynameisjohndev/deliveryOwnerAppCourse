import { ButtonContainer, ButtonText } from "./styles"

const Button = ({
  title,
  type,
  ...rest
}) => {
  return (
    <ButtonContainer {...rest} type={type}>
      <ButtonText>
        {title}
      </ButtonText>
    </ButtonContainer>
  )
}

export { Button }