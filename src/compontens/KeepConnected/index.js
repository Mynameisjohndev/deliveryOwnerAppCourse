import { CustomCheckBox, KeepConnectedContainer, KeepConnectedText } from "./srtyles"

const KeepConnected = ({
  active,
  setActive,
  ...rest
}) => {
  return (
    <KeepConnectedContainer {...rest}>
      <CustomCheckBox
        {...{
          onValueChange: () => setActive(!active),
          value: active
        }}
      />
      <KeepConnectedText>Manter-me conectado</KeepConnectedText>
    </KeepConnectedContainer>
  )
}

export { KeepConnected }