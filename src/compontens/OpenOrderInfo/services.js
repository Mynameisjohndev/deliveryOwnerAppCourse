import { firebase } from "@react-native-firebase/firestore"
import { Alert } from "react-native";

const { firestore } = firebase;

const handleUpdateOrderStatus = ({ order, newOrderStatus, visible, client }) => {
  if (visible) {
    const { docid } = order;
    console.log(client)
    firestore().collection("users-orders")
    .doc(client.docid)
    .collection("orders")
      .doc(docid)
      .update({
        status: newOrderStatus
      })
      .then(() => {
        Alert.alert("Pedido atualizado", "Seu pedido foi atualizado com sucesso!")
      })
      .catch((e) => {
        console.log(e)
      })
  }
}

export { handleUpdateOrderStatus }