import styled from "styled-components/native";

export const FormInputContainer = styled.View`
  width: 90%;
  height: 70px;
  padding: 6px 16px;
  border-radius: 12px;
  margin-bottom: 14px;
  background-color: ${({ theme }) => theme.COLORS.INPUT};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`

export const FormTextInput = styled.TextInput`
  width: 80%;
  height: 100%;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.TEXT};
`

export const FormTouchable = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
`

