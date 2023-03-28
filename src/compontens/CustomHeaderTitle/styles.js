import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const HeaderTitleContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
`
export const HeaderTitle = styled.Text`
  align-self: flex-start;
  font-size: 30px;
  font-weight: bold;
  color: ${({theme})=>theme.COLORS.TEXT};
`
export const HeaderSubTitle = styled.Text`
  align-self: flex-start;
  font-size: 22px;
  font-weight: 500;
  color: ${({theme})=>theme.COLORS.TEXT}
`