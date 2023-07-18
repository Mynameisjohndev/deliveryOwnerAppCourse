import styled from "styled-components/native";

const FloatingMenuContainer = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  margin: 32px;
`

const FloatingMenuModal = styled.Modal.attrs({
  transparent: true,
  animationType: "fade",
  statusBarTranslucent: true
})``;

const FloatingMenuOverlay = styled.Pressable`
  background-color: rgba(0,0,0,0.5);
  flex: 1;
  align-items: center;
  justify-content: center;
`

const FloatingMenuContent = styled.View`
  background-color: ${({ theme }) => theme.COLORS.TEXT};
  flex-direction: column;
  width: 150px;
  min-height: 90px;
  border-radius: 4px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 32px;
`
const FloatingMenuItem = styled.TouchableOpacity`
  width: 100%;
  min-height: 45px;
  /* padding: 8px; */
  align-items: center;
  justify-content: center;
`

const FloatingMenuItemText = styled.Text`
`

export { 
  FloatingMenuContainer,
  FloatingMenuModal,
  FloatingMenuOverlay, 
  FloatingMenuContent,
  FloatingMenuItem,
  FloatingMenuItemText
}