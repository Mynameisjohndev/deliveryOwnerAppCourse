import styled from "styled-components/native";

export const SelectedItemColumn = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const SelectedItemScrollColumn = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  width: 85%;
  height: 300px;
  margin: 12px 0;
  align-self: center;
`

export const SelectedItemContainerImage = styled.TouchableOpacity`
  width: 160px;
  height: 160px;
  background-color: ${({ theme }) => theme.COLORS.TEXT};
  border-radius: 80px;
  align-self: center;
  align-items: center;
  justify-content: center;
`

export const SelectedItemImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 80px;
`

export const SelectedItemTitle = styled.TextInput`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  width: 85%;
`

export const SelectedItemLabel = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: left;
`
export const SelectedItemDescription = styled.TextInput.attrs({
  multiline: true,
})`
  width: 100%;
  height: 110px;
  font-size: 16px;
  border-radius: 12px;
  margin: 6px 0px 12px 0px;
  padding: 6px;
  background-color: ${({ theme }) => theme.COLORS.TEXT};
`