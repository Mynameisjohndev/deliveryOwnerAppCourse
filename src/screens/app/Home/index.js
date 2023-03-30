import { Card, CustomFlatList, FloatButton, HeaderBackgroudImage, HeaderContainer } from "../../../global"
import Image from "../../../assets/firstbackground.png";
import { CustomHeaderTitle } from "../../../compontens/CustomHeaderTitle";
import { useContextApp } from "../../../context";
import { Search } from "../../../compontens/Search";
import { useState } from "react";
import { Text } from "react-native";
import { ScreenTemplate } from "../../../compontens/ScreenTemplate";
import { Button } from "../../../compontens/Button";
// import Button from "../../../compontens/Button"

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

  const data = [
    {id:1, name:"coca-cola", image: "https://classic.exame.com/wp-content/uploads/2021/06/Burger-King-Whopper.jpg?quality=70&strip=info&w=1024"},
    {id:2, name:"coca-cola", image: "https://classic.exame.com/wp-content/uploads/2021/06/Burger-King-Whopper.jpg?quality=70&strip=info&w=1024"},
    {id:3, name:"coca-cola", image: "https://classic.exame.com/wp-content/uploads/2021/06/Burger-King-Whopper.jpg?quality=70&strip=info&w=1024"},
    {id:4, name:"coca-cola", image: "https://classic.exame.com/wp-content/uploads/2021/06/Burger-King-Whopper.jpg?quality=70&strip=info&w=1024"},
    {id:5, name:"coca-cola", image: "https://classic.exame.com/wp-content/uploads/2021/06/Burger-King-Whopper.jpg?quality=70&strip=info&w=1024"},
  ]

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
            data,
            keyExtractor: (item) => item.id,
            renderItem: ({item}) => {
              return(
                <Card>
                </Card>
              )
            },
          }}/>

          <Button {...{
            title: "Novo lanche",
            onPress: () => null,
            style: {
              width: "80%"
            }
          }}/>
        </>
    }} />
  )
}

export { Home }