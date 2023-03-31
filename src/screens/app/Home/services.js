import { firebase } from "@react-native-firebase/firestore";
import { Alert } from "react-native";

const { firestore } = firebase;

const getAllProducts = ({ setData, setLoadingData }) => {
  setLoadingData(true);
  firestore()
  .collection("products")
  .get()
  .then((response)=>{
    let products = [];
    for(let doc in response.docs){
      products.push(response.docs[doc].data())
    }
    setData(products)
    return setLoadingData(false);
  })
  .catch(()=>{
    Alert.alert("Ocorreu um erro inesperado!", "Não possível carregar os produtos!")
    return setLoadingData(false);
  })
}

export { getAllProducts }