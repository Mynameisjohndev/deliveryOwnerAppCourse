import { css } from "styled-components";
import styled from "styled-components/native";

export const CardClientOrderContainer = styled.TouchableOpacity`
  width: 85%;
  min-height: 100px;
  padding: 10px;
  border-radius: 14px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.COLORS.TEXT};
  align-self: center;
  align-items: center;
  /* justify-content: space-between; */
  flex-direction: row;
`


export const CardClientOrderImage = styled.Image.attrs({
  resizeMode: "center"
})`
  width: 90px;
  height: 90px;
`

export const CardClientOrderRow = styled.View`
  width: 65%;
  flex-direction: row;
`
export const CardClientOrderColumn = styled.View`
  width: 65%;
  flex-direction: column;
`

export const CardClientOrderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.BACKGROUND}
`
export const CardClientOrderPrice = styled.Text`
  font-size: 12px;
  margin-left: 2px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.BUTTON}
`

export const CardClientOrderStatus = styled.View`
  /* width: 80%; */
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: ${({status, theme}) => 
     status === "in preparation" ? theme.COLORS.PREPARATION : theme.COLORS.DELIVERIED
  };
`
export const CardClientOrderStatusTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.TEXT}
`