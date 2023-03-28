import styled from "styled-components/native";

export const BackgroundContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme})=>theme.COLORS.BACKGROUND};
  align-items: center;
  justify-content: center;
`
export const BackgroundContainerVariant = styled(BackgroundContainer)`
  justify-content: flex-start;
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

export const HeaderContainer = styled.View`
  height: 35%;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-end;
`
export const HeaderBackgroudImage= styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.6;
`

export const CustomContent = styled.View`
  height: 67%;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  bottom: 0;
  position: absolute;
  justify-content: space-between;
  background-color: ${({theme})=>theme.COLORS.SECOND_BACKGROUND};
`