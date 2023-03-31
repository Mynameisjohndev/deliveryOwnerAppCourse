import styled from "styled-components/native";

export const SearchContainer = styled.View`
  margin-top: -30px;
  border-radius: 10px;
  width: 85%;
  height: 60px;
  padding: 12px;
  background-color: ${({theme})=>theme.COLORS.TEXT};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  align-self: center;
`

export const SearchInput = styled.TextInput`
  width: 90%;
  height: 100%;
`