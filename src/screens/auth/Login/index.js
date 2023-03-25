import { useState } from "react"
import { Button } from "../../../compontens/Button";
import { FormInput } from "../../../compontens/FormInput"
import { KeepConnected } from "../../../compontens/KeepConnected";
import { useContextApp } from "../../../context";
import { BackgroundContainer, FormContainer, Title } from "../../../global";

const Login = () => {
  const [email, setEmail] = useState("owner@gmail.com");
  const [password, setPassword] = useState("12211221");
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const { handleLoginUser, authLoading } = useContextApp();

  return (
    <BackgroundContainer>
      <FormContainer>
        <Title>Entrar</Title>
        <FormInput {...{
          hasIcon: false,
          placeholder: "E-mail",
          onChangeText: setEmail,
          value: email,
        }} />
        <FormInput {...{
          hasIcon: true,
          placeholder: "Senha",
          onChangeText: setPassword,
          value: password,
          setVisible,
          visible
        }} />
        <Button {...{
          title: "Entrar",
          loading: authLoading,
          onPress: () => handleLoginUser(email, password, active)
        }} />
        <KeepConnected{...{
          active, setActive
        }} />
      </FormContainer>
    </BackgroundContainer>
  )
}

export { Login }