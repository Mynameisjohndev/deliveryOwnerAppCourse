import { Text } from "react-native"
import { HeaderBackgroudImage, BackgroundContainerVariant, HeaderContainer } from "../../../global"
import Image from "../../../assets/firstbackground.png";
import { CustomHeaderTitle } from "../../../compontens/CustomHeaderTitle";
import { useContextApp } from "../../../context";

const Home = () => {

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
    <BackgroundContainerVariant>
      <Header/>
    </BackgroundContainerVariant>
  )
}

export { Home }