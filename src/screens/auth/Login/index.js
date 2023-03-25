import {  useState } from "react"
import { Button } from "../../../compontens/Button";
import { FormInput } from "../../../compontens/FormInput"
import { KeepConnected } from "../../../compontens/KeepConnected";
import { ContainerBackground, ContainerForm, Title } from "../../../global";

const Login = () => {
  const [email, setEmail] = useState("teste@gmail.com");
  const [password, setPassword] = useState("213212312");
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <ContainerBackground>
      <ContainerForm>
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
          title: "Entrar"
        }} />
        <KeepConnected{...{
          active, setActive
        }} />
      </ContainerForm>
    </ContainerBackground>
  )
}

export { Login }