import { useRoute } from "@react-navigation/native"
import { ScreenTemplate } from "../../../compontens/ScreenTemplate"

const SelectedItem = () => {

  const route = useRoute(); 
  const { item } = route.params;
  console.log(item);
  return (
    <ScreenTemplate {...{
      children: <>
        
      </>,
      secondChildren: <></>
    }} />
  )
}

export { SelectedItem }