import { useRoute } from "@react-navigation/native"
import { ScreenTemplate } from "../../../compontens/ScreenTemplate"
import { Button } from "../../../compontens/Button";
import { SelectedItemColumn, SelectedItemContainerImage, SelectedItemDescription, SelectedItemImage, SelectedItemLabel, SelectedItemScrollColumn, SelectedItemTitle } from "./styles";
import { useState } from "react";
import { handleEditProduct } from "./services";

const SelectedItem = () => {

  const route = useRoute();
  const { item } = route.params;
  const { url, name, description, price, docid } = item;
  const [title, setTitle] = useState(name);
  const [itemDescription, setItemDescription] = useState(description);
  const [itemPrice, setItemPrice] = useState(price || 0);

  const dataEditProduct = {
    docid,
    title,
    itemDescription,
    itemPrice
  }

  return (
    <ScreenTemplate {...{
      children: <>

      </>,
      secondChildren: <>

        <SelectedItemColumn style={{ marginTop: -80 }}>
          <SelectedItemContainerImage>
            <SelectedItemImage {...{ source: { uri: url } }} />
          </SelectedItemContainerImage>
          <SelectedItemTitle  {...{ value: title, onChangeText: setTitle }} />
        </SelectedItemColumn>
        
        <SelectedItemScrollColumn>
          <SelectedItemLabel>Descrição</SelectedItemLabel>
          <SelectedItemDescription textAlignVertical="top" {...{ value: itemDescription, onChangeText: setItemDescription }} />
          <SelectedItemLabel>Preço</SelectedItemLabel>
          <SelectedItemDescription 
            keyboardType="number-pad" 
            textAlignVertical="center" 
            style={{ width: "30%", height: 70, fontSize: 24, textAlign: "center", fontWeight: "bold"  }} 
            {...{ value: itemPrice || "00,00", onChangeText: setItemPrice }}
          />
        <SelectedItemColumn>
          <Button {...{
            title: "Salvar alterações",
            type: "primary",
            onPress: () => handleEditProduct(dataEditProduct),
            style: {
              width: "100%"
            }
          }} />
          <Button {...{
            title: "Remover lanche",
            onPress: () => null,
            style: {
              width: "100%"
            }
          }} />
        </SelectedItemColumn>
        </SelectedItemScrollColumn>
  
      </>
    }} />
  )
}

export { SelectedItem }