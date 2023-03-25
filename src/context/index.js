import { createContext, useContext, useState } from "react"

const Context = createContext({});

const ContextAppProvider = ({children}) => {
  const [user, setUser] = useState({
    name: "João", email: "joao@gmail.com"
  });
  return(
    <Context.Provider value={{
      user, setUser
    }}>
      {children}
    </Context.Provider>
  )
}

const useContextApp = () =>{
  const context = useContext(Context);
  return context;
}

export { ContextAppProvider, useContextApp };