import { CustomHeaderTitle } from "../../../compontens/CustomHeaderTitle"
import { ScreenTemplate } from "../../../compontens/ScreenTemplate"
import Image from "../../../assets/firstbackground.png";
import { CustomFlatList, HeaderBackgroudImage, HeaderContainer } from "../../../global";
import { useEffect } from "react";
import { getAllClients } from "./services";
import { useContextApp } from "../../../context";
import { useState } from "react";
import { Search } from "../../../compontens/Search";
import { ActivityIndicator, View } from "react-native";
import { CardClient } from "../../../compontens/CardClient";

const Client = () => {

  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [searchClient, setSearchClient] = useState("");
  const { user } = useContextApp();

  useEffect(() => {
    getAllClients({ setData, setLoadingData, user })
  }, [])

  const Header = () => {
    return (
      <HeaderContainer>
        <HeaderBackgroudImage source={Image} resizeMode="stretch" />
        <CustomHeaderTitle
          {...{
            title: `Seus clientes`,
            subtitle: "Acompanhar pedidosi"
          }}
        />
      </HeaderContainer>
    );
  }

  return (
    <ScreenTemplate {...{
      children: <Header />,
      secondChildren: <>
        <Search {...{
          placeholder: "Procura cliente ...",
          value: searchClient,
          onChangeText: setSearchClient
        }} />

        <>
          {loadingData ? <ActivityIndicator color="white" size="large" /> : (
            <CustomFlatList {...{
              data,
              keyExtractor: (_, index) => index,
              renderItem: ({ item, _ }) => <CardClient {...{
                item,
                onPress: () => console.log("clique")
              }}/>,
            }} />
          )}
        </>
        <View />
      </>
    }} />
  )
}

export { Client }