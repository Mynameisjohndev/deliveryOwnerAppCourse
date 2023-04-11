import { firebase } from "@react-native-firebase/firestore";
import { Alert } from "react-native";

const { firestore } = firebase;
let localData = [];

const getAllProducts = ({ setData, setLoadingData }) => {
  setLoadingData(true);
  firestore()
    .collection("products")
    .get()
    .then((response) => {
      let products = [];
      for (let doc in response.docs) {
        products.push(response.docs[doc].data());
      }
      localData = products;
      setData(products);
      return setLoadingData(false);
    })
    .catch(() => {
      Alert.alert("Ocorreu um erro inesperado!", "Não possível carregar os produtos!")
      return setLoadingData(false);
    })
}

const searchOneProduct = ({ setData, searchProduct }) => {
  if(searchProduct === ""){
    return setData(localData);
  }
  const filter = localData.filter((item) => {
    if(item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .indexOf(searchProduct.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()) > -1){
      return true;
    }else{
      return false;
    }
  });
  setData(filter);
}

const handleToSelectedItem = ({ item, navigate }) => {
  return navigate("selectedItem", { item })
}

export { getAllProducts, searchOneProduct, handleToSelectedItem }