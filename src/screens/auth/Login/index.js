import { useState } from "react"
import { View } from "react-native"
import { Button } from "../../../compontens/Button";
import { FormInput } from "../../../compontens/FormInput"

const Login = () => {

  const [email, setEmail] = useState("teste@gmail.com");
  const [password, setPassword] = useState("213212312");
  const [visible, setVisible] = useState(false);

  return(
    <View>
      <FormInput {...{
        hasIcon: false,
        placeholder: "E-mail",
        onChangeText: setEmail,
        value: email,
      }}/>
      <FormInput {...{
        hasIcon: true,
        placeholder: "Senha",
        onChangeText: setPassword,
        value: password,
        setVisible,
        visible
      }}/>
      <Button {...{
        title: "Entrar",
        type: "primary"
      }}/>
    </View>
  )
}

export {Login}