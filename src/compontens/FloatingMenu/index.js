import { useState } from "react"
import Menu from "../../assets/Menu.svg";
import { FloatingMenuContainer, FloatingMenuContent, FloatingMenuItem, FloatingMenuItemText, FloatingMenuModal, FloatingMenuOverlay } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useContextApp } from "../../context";

const FloatingMenu = () => {
  const [visible, setVisible] = useState(false);
  const { navigate } = useNavigation();
  const { signoutUser } = useContextApp();

  const openAndCloseMenu = () => {
    setVisible(!visible);
  }

  const handleToClients = () => {
    setVisible(!visible);
    navigate("client");
  } 

  const handleSignout = () => {
    setVisible(!visible);
    signoutUser();
  } 

  return (
    <>
      <FloatingMenuContainer onPress={openAndCloseMenu}>
        <Menu />
      </FloatingMenuContainer>
      <FloatingMenuModal {...{visible, onRequestClose: openAndCloseMenu}}>
        <FloatingMenuOverlay onPress={openAndCloseMenu}>
          <FloatingMenuContent>
            <FloatingMenuItem onPress={() => handleToClients()}>
              <FloatingMenuItemText>
                Clientes
              </FloatingMenuItemText>
            </FloatingMenuItem>
            <FloatingMenuItem onPress={() => handleSignout()}>
              <FloatingMenuItemText>
                Sair
              </FloatingMenuItemText>
            </FloatingMenuItem>
          </FloatingMenuContent>
        </FloatingMenuOverlay>
      </FloatingMenuModal>
    </>
  )
}

export { FloatingMenu }