import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  width: 100%;
  height: 70px;
  padding: 6px 16px;
  border-radius: 12px;
  margin-bottom: 14px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${({ theme, type }) =>
    type === "primary" ?
      theme.COLORS.BACKGROUND :
      theme.COLORS.BUTTON
  };
  `

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
`


