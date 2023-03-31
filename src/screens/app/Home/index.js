import { CustomFlatList, HeaderBackgroudImage, HeaderContainer } from "../../../global"
import Image from "../../../assets/firstbackground.png";
import { CustomHeaderTitle } from "../../../compontens/CustomHeaderTitle";
import { useContextApp } from "../../../context";
import { Search } from "../../../compontens/Search";
import { useState } from "react";
import { ScreenTemplate } from "../../../compontens/ScreenTemplate";
import { Button } from "../../../compontens/Button";
import { CardProduct } from "../../../compontens/CardProduct";
import { useEffect } from "react";
import { getAllProducts } from "./services";
import { ActivityIndicator } from "react-native";

const Home = () => {
  const [searchItem, setSearchItem] = useState("");
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const { user } = useContextApp();

  useEffect(() => {
    getAllProducts({ setData, setLoadingData });
  }, [])

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

          <>
            {loadingData ? <ActivityIndicator color="white" size="large" /> : (
              <CustomFlatList {...{
                data,
                keyExtractor: (item) => item.id,
                renderItem: ({ item }) => <CardProduct  {...{ item }} />,
              }} />
            )}
          </>

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