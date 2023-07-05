import { CustomHeaderTitle } from "../../../compontens/CustomHeaderTitle"
import { ScreenTemplate } from "../../../compontens/ScreenTemplate"
import Image from "../../../assets/firstbackground.png";
import {  HeaderBackgroudImage, HeaderContainer } from "../../../global";
import { useRoute } from "@react-navigation/native";

const SelecteedClient = () => {

  const { params } = useRoute();
  const { client } = params;

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
      children: <Header {...{client}}/>,
      secondChildren: <></>
    }} />
  )
}

export { SelecteedClient }