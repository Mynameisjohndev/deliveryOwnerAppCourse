import { CustomHeaderTitle } from "../../../compontens/CustomHeaderTitle"
import { ScreenTemplate } from "../../../compontens/ScreenTemplate"
import Image from "../../../assets/firstbackground.png";
import { CustomFlatList, HeaderBackgroudImage, HeaderContainer } from "../../../global";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useEffect } from "react";
import { loadClientOrders } from "./services";
import { ActivityIndicator } from "react-native";
import { CardClientOrder } from "../../../compontens/CardClientOrder";
import { BackButton } from "../../../compontens/BackButton";

const SelecteedClient = () => {

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { client } = params;

  useEffect(() => {
    loadClientOrders({ client, setLoading, setOrders })
  }, [client]);

  const Header = ({ client }) => {
    return (
      <HeaderContainer>
        <HeaderBackgroudImage source={Image} resizeMode="stretch" />
        <CustomHeaderTitle
          {...{
            title: `Cliente: ${client.name}`,
            subtitle: "Acompanhar pedidos"
          }}
        />
      </HeaderContainer>
    );
  }

  return (
    <ScreenTemplate {...{
      children: 
      <>
        <Header {...{ client }} />
        <BackButton {...{ goBack }} />
      </>,
      secondChildren: <>
        {loading ? <ActivityIndicator color="white" size="large" /> : (
          <CustomFlatList {...{
            data: orders,
            keyExtractor: (_, index) => index,
            renderItem: ({ item, _ }) => <CardClientOrder  {...{ order: item, client }} />,
          }} />
        )}
      </>
    }} />
  )
}

export { SelecteedClient }