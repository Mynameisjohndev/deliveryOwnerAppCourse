import styled from "styled-components/native";

const OpenOrderInfoContainer = styled.Modal.attrs({
  transparent: true,
  animationType: "fade"
})``;

const OpenOrderInfoOverlay = styled.Pressable`
  background-color: rgba(0,0,0,0.5);
  flex: 1;
  align-items: center;
  justify-content: center;
`
const OpenOrderInfoContent = styled.ScrollView`
  background-color: ${({ theme }) => theme.COLORS.TEXT};
  /* flex-direction: column; */
  width: 80%;
  max-height: 70%;
  border-radius: 8px;
  padding: 16px;
`
const OpenOrderInfoPressToClose = styled.TouchableOpacity`
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 align-self: flex-end;
`

const OpenOrderInfoRow = styled.View`
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
`
const OpenOrderInfoColumn = styled.View`
 flex-direction: column;
`
const OpenOrderInfoTitle = styled.Text`
 font-weight: bold;
 font-size: 18px;
 /* margin-left: 16px; */
`

const OpenOrderInfoCardAddress = styled.View`
  margin: 10px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.MODAL};
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const OpenOrderInfoCardOrder = styled.View`
  margin-bottom: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.MODAL};
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const OpenOrderInfoCardOrderImage = styled.Image.attrs({
  resizeMode: "center"
})`
  width: 90px;
  height: 90px;
`;

const OpenOrderInfoCardAddressInfo = styled.View`
  width: 80%;
`
const OpenOrderInfoCardAddressInfoText = styled.Text`
 font-size: 14px;
`
const OpenOrderInfoContentRow = styled.View`
  width: 65%;
  flex-direction: row;
`
const OpenOrderInfoContentTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.BACKGROUND}
`
const OpenOrderInfoContentPrice = styled.Text`
  font-size: 12px;
  margin-left: 2px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.BUTTON}
`

export {
  OpenOrderInfoContainer,
  OpenOrderInfoOverlay,
  OpenOrderInfoContent,
  OpenOrderInfoPressToClose,
  OpenOrderInfoRow,
  OpenOrderInfoTitle,
  OpenOrderInfoCardAddress,
  OpenOrderInfoCardAddressInfo,
  OpenOrderInfoCardAddressInfoText,
  OpenOrderInfoColumn,
  OpenOrderInfoCardOrder,
  OpenOrderInfoCardOrderImage,
  OpenOrderInfoContentRow,
  OpenOrderInfoContentTitle,
  OpenOrderInfoContentPrice
}