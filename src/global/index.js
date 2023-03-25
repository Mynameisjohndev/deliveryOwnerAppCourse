import styled from "styled-components/native";

export const BackgroundContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme})=>theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 25px;
  font-weight: bold;
  align-self: flex-start;
  color: ${({theme})=>theme.COLORS.TEXT};
`
export const FormContainer = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
`