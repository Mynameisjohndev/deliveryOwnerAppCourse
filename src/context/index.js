import { createContext, useContext, useEffect, useState } from "react"
import { firebase } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storage_user_key } from "../config";

const Context = createContext({});

const ContextAppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authLoading, setAuthLoading] = useState(false);

  const { auth } = firebase;

  const handleLoginUser = async (email, password, keepConnected) => {
    setAuthLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        firestore().collection("users")
          .where("uid", "==", res.user.uid)
          .get()
          .then(async (res) => {
            setUser(res.docs[0].data())
            if (keepConnected) {
              try {
                await AsyncStorage.setItem(storage_user_key, JSON.stringify(res.docs[0].data()));
              } catch (_) {
                //
              }
            }
            setAuthLoading(false);
          })
          .catch(() => {
            setAuthLoading(false);
          })
      })
      .catch(() => {
        setAuthLoading(false);
      })
  }

  const loadAuthenticatedUser = async () => {
    setAuthLoading(true);
    try {
      const responseUser = await AsyncStorage.getItem(storage_user_key);
      if (responseUser) {
        setUser(JSON.parse(responseUser));
        setAuthLoading(false);
      }
    } catch (_) {
      setAuthLoading(false);
    }
  }

  const  signoutUser = () => {
    // AsyncStorage.removeItem(storage_user_key);
    setUser({});
  }

  useEffect(() => {
    loadAuthenticatedUser();
  }, [])

  return (
    <Context.Provider value={{
      user,
      setUser,
      handleLoginUser,
      authLoading,
      signoutUser
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