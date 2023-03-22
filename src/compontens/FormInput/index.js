import { FormInputContainer, FormTextInput, FormTouchable } from "./styles"
import OpenEye from '../../assets/OpenEye.svg'
import ClosedEye from '../../assets/ClosedEye.svg'

const FormInput = ({
  placeholder,
  hasIcon,
  value,
  onChangeText,
  visible,
  setVisible
}) => {

  return (
    <FormInputContainer>
      <FormTextInput {...{ placeholder, value, onChangeText, secureTextEntry: hasIcon ? visible : false }} />
      {
        hasIcon && (
            <FormTouchable onPress={() => setVisible(!visible)}>
              {!visible ? <OpenEye /> : <ClosedEye />}
            </FormTouchable>
        )
      }
    </FormInputContainer>
  )
}

export { FormInput }