import styled from "styled-components/native";

export const CardProductContainer = styled.View`
  width: 85%;
  min-height: 100px;
  padding: 10px;
  border-radius: 14px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.COLORS.TEXT};
  align-self: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`


export const CardProductImage = styled.Image.attrs({
  resizeMode: "center"
})`
  width: 90px;
  height: 90px;
`

export const CardProductColumn = styled.View`
  width: 60%;
  flex-direction: column;
`

export const CardProductTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.BACKGROUND}
`
export const CardProductSubTitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
`

export const CardProductOnpress = styled.TouchableOpacity`
`