import styled from "styled-components/native";
import themes from "../../themes"
import { Checkbox } from "expo-checkbox"

export const KeepConnectedContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-self: center;
`
export const CustomCheckBox = styled(Checkbox).attrs({
  color: themes.COLORS.BUTTON
})`
  width: 15px;
  height: 15px;
  border-radius: 2px;
  `

export const KeepConnectedText = styled.Text`
  color: ${({theme})=>theme.COLORS.TEXT};
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
`