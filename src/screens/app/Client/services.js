import { firebase } from "@react-native-firebase/firestore";
import { Alert } from "react-native";

const { firestore } = firebase;
let localData = [];

const getAllClients = ({ setData, setLoadingData, user }) => {
  setLoadingData(true);
  firestore()
    .collection("users")
    .get()
    .then((response) => {
      let users = [];
      for (let doc in response.docs) {
        const item = response.docs[doc]
        if(item.data().uid !== user.uid){
          users.push({ ...item.data(), docid: item.id });
        }
      }
      localData = users;
      setData(users);
      return setLoadingData(false);
    })
    .catch(() => {
      Alert.alert("Ocorreu um erro inesperado!", "Não possível carregar os clientes!")
      return setLoadingData(false);
    })
}

export { getAllClients }