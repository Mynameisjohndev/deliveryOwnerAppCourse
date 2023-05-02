import styled from "styled-components/native";

export const CardClientContainer = styled.View`
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

export const CardClientColumn = styled.View`
  width: 60%;
  flex-direction: column;
`

export const CardClientTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.BACKGROUND}
`

export const CardClientOnpress = styled.TouchableOpacity`
`