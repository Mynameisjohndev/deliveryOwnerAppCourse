import { firebase } from "@react-native-firebase/firestore"

const { firestore } = firebase;

const loadClientOrders = ({ client, setLoading, setOrders }) => {
  firestore()
    .collection("users-orders")
    .doc(client.docid)
    .collection("orders")
    .onSnapshot((response) => {
      let orders = [];
      for (let doc in response.docs) {
        const item = response.docs[doc]
        orders.push(item.data());
      }
      setOrders(orders);
      return setLoading(false);
    })
}

export { loadClientOrders }