import styled from "styled-components/native";

export const HeaderTitleContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  margin-bottom:32px;
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