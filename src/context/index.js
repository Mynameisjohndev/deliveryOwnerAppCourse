import { createContext, useContext, useState } from "react"
import { firebase } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const Context = createContext({});

const ContextAppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [authLoading, setAuthLoading] = useState(false);

  const { auth } = firebase;

  const handleLoginUser = async (email, password) => {
    setAuthLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        firestore().collection("users")
        .where("uid", "==", res.user.uid)
        .get()
        .then((res)=>{
          setUser(res.docs[0].data())
          setAuthLoading(false);
        })
        .catch((err) => {
          setAuthLoading(false);
        })
      })
      .catch((err) => {
        setAuthLoading(false);
      })
  }

  return (
    <Context.Provider value={{
      user, 
      setUser, 
      handleLoginUser,
      authLoading
    }}>
      {children}
    </Context.Provider>
  )
}

const useContextApp = () => {
  const context = useContext(Context);
  return context;
}

export { ContextAppProvider, useContextApp };