import { firebase } from "@react-native-firebase/firestore";
import { Alert } from "react-native";

const { firestore } = firebase;

const handleEditProduct = (item) => {
  const { docid, title, itemDescription, itemPrice } = item;
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

const hadnleRemoveProduct = ({ item, goBack }) => {
  const { docid } = item;
  Alert.alert("Exclusão", "Deseja remover este produto?", [
    { text: "Não", style: "cancel" },
    { text: "Sim", onPress: () => {
      firestore()
      .collection("products")
      .doc(docid).delete().then(() => {
        Alert.alert("Concluido", "Seu produto foi removido com sucesso!");
        return goBack();
      })
    }}
  ])
}

export { handleEditProduct, hadnleRemoveProduct }