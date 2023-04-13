import { firebase } from "@react-native-firebase/firestore";
import { Alert, PermissionsAndroid } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

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
    {
      text: "Sim", onPress: () => {
        firestore()
          .collection("products")
          .doc(docid).delete().then(() => {
            Alert.alert("Concluido", "Seu produto foi removido com sucesso!");
            return goBack();
          })
      }
    }
  ])
}

const handleSelectImage = (setImage) => {
  Alert.alert("Selecionar imagem", "Por favor selecione uma imagem.", [
    { text: "Câmera", onPress: () => executeSelectImage({ type: "camera", setImage }) },
    { text: "Galeria", onPress: () => executeSelectImage({ type: "library", setImage }) },
  ])
}

const executeSelectImage = async ({ type, setImage }) => {
  const read = await PermissionsAndroid.request("android.permission.READ_EXTERNAL_STORAGE");
  const write = await PermissionsAndroid.request("android.permission.WRITE_EXTERNAL_STORAGE");

  const options = {
    mediaType: "photo"
  }

  if (read === "granted" && write === 'granted') {
    if (type === "camera") {
      return launchCamera(options, response => {
        const image = response.assets[0];
        if (image) {
          setImage(image)
        }
      })
    }
    return launchImageLibrary(options, response => {
      const image = response.assets[0];
      if (image) {
        setImage(image)
      }
    })
  }
}


export { handleEditProduct, hadnleRemoveProduct, handleSelectImage }