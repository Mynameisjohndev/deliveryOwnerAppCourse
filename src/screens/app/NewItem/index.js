import { useNavigation } from "@react-navigation/native"
import { ScreenTemplate } from "../../../compontens/ScreenTemplate"
import { Button } from "../../../compontens/Button";
import { NewItemColumn, NewItemContainerImage, NewItemImage, NewItemLabel, NewItemScrollColumn, NewItemTitle, NewItemDescription } from "./styles";
import { useState } from "react";
import { handleEditProduct, handleSelectImage } from "./services";
import { BackButton } from "../../../compontens/BackButton";

const NewItem = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { goBack } = useNavigation();

  const data = {
    image,
    name,
    description,
    price,
    goBack
  }

  return (
    <ScreenTemplate {...{
      children: <><BackButton {...{ goBack }} /></>,
      secondChildren: <>

        <NewItemColumn style={{ marginTop: -80 }}>
          <NewItemContainerImage {...{
            onPress: () => handleSelectImage(setImage)
          }}>
            {image && <NewItemImage {...{ source: { uri: image.uri } }} />}
          </NewItemContainerImage>
          <NewItemTitle  {...{ value: name, onChangeText: setName, placeholder: "Titulo" }} />
        </NewItemColumn>

        <NewItemScrollColumn>
          <NewItemLabel>Descrição</NewItemLabel>
          <NewItemDescription textAlignVertical="top" {...{ value: description, onChangeText: setDescription, placeholder: "Descrição do item..." }} />
          <NewItemLabel>Preço</NewItemLabel>
          <NewItemDescription
            keyboardType="number-pad"
            textAlignVertical="center"
            style={{ width: "30%", height: 70, fontSize: 24, textAlign: "center", fontWeight: "bold" }}
            {...{ value: price, onChangeText: setPrice, placeholder: "00,00" }}
          />
          <NewItemColumn>
            <Button {...{
              title: "Criar item",
              type: "primary",
              onPress: () => handleEditProduct(data),
              style: {
                width: "100%"
              }
            }} />
            <Button {...{
              title: "Cancelar",
              onPress: () => goBack(),
              style: {
                width: "100%"
              }
            }} />
          </NewItemColumn>
        </NewItemScrollColumn>

      </>
    }} />
  )
}

export { NewItem }