import { HeaderBackgroudImage, HeaderContainer } from "../../../global"
import Image from "../../../assets/firstbackground.png";
import { CustomHeaderTitle } from "../../../compontens/CustomHeaderTitle";
import { useContextApp } from "../../../context";
import { Search } from "../../../compontens/Search";
import { useState } from "react";
import { Text } from "react-native";
import { ScreenTemplate } from "../../../compontens/ScreenTemplate";

const Home = () => {
  const [searchItem, setSearchItem] = useState("");
  const { user } = useContextApp();

  const Header = () => {
    return (
      <HeaderContainer>
        <HeaderBackgroudImage source={Image} resizeMode="stretch" />
        <CustomHeaderTitle
          {...{
            title: `Bem vindo ${user.name},`,
            subtitle: "que bom ter você aqui"
          }}
        />
      </HeaderContainer>
    );
  }

  return (
    <ScreenTemplate {...{
      children: <Header />,
      secondChildren:
        <>
          <Search {...{
            placeholder: "Procura item ...",
            value: searchItem,
            onChangeText: setSearchItem
          }} />
          <Text>{searchItem}</Text>
        </>
    }} />
  )
}

export { Home }