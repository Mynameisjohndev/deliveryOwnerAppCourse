import { firebase } from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { Alert, PermissionsAndroid } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const { firestore } = firebase;

const handleEditProduct = async (item) => {
  const { image, name, description, price, goBack } = item;
  if (!image || !name || !description || !price){
    return Alert.alert("Houve um erro", "Você precisa informar todas os campos para criar uim novo item!")
  }
  const url = await uploadPhotoIntoStorage(image);
  firestore()
    .collection("products")
    .doc()
    .set({
      name,
      description,
      price,
      url
    }).then(() => {
      Alert.alert("Sucesso", "Seu produto foi cadatrado com sucesso!");
      goBack();
    }).catch((err) => {
      console.log(err)
    })
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
        if (response.didCancel) return;
        const image = response.assets[0];
        if (image) {
          setImage(image)
        }
      })
    }
    return launchImageLibrary(options, response => {
      if (response.didCancel) return;
      const image = response.assets[0];
      if (image) {
        setImage(image)
      }
    })
  }
}

const uploadPhotoIntoStorage = async (image) => {
  if (image.uri) {
    const reference = storage().ref(`images/${image.fileName}`);
    await reference.putFile(image.uri);
    const url = await reference.getDownloadURL();
    if (!url) {
      return Alert.alert("Erro", "Não foi possível atualizar seus dados, tente novamente!");
    }
    return url;
  }
  return "";
}

export { handleEditProduct, handleSelectImage }