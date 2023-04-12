import { firebase } from "@react-native-firebase/firestore";
import { Alert } from "react-native";

const { firestore } = firebase;

const handleEditProduct = (item) => {
  const { docid, title,
    itemDescription,
    itemPrice } = item;

  console.log({
    docid, title,
    itemDescription,
    itemPrice
  })

  firestore()
    .collection("products")
    .doc(docid)
    .update({
      name: title,
      description: itemDescription,
      price: itemPrice
    }).then(() => {
      Alert.alert("Atualização", "Seu produto foi atualizado com sucesso!")
    }).catch((err) => {
      console.log(err)
    })
}

export { handleEditProduct }