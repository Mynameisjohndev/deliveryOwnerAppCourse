import { CustomFlatList, HeaderBackgroudImage, HeaderContainer } from "../../../global"
import Image from "../../../assets/firstbackground.png";
import { CustomHeaderTitle } from "../../../compontens/CustomHeaderTitle";
import { useContextApp } from "../../../context";
import { Search } from "../../../compontens/Search";
import { useState } from "react";
import { ScreenTemplate } from "../../../compontens/ScreenTemplate";
import { Button } from "../../../compontens/Button";
import { CardProduct } from "../../../compontens/CardProduct";

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
          <CustomFlatList {...{
            data: [],
            keyExtractor: (item) => item.id,
            renderItem: ({ item }) => <CardProduct  {...{ item }} />,
          }} />

          <Button {...{
            title: "Novo lanche",
            onPress: () => null,
            style: {
              width: "85%"
            }
          }} />
        </>
    }} />
  )
}

export { Home }