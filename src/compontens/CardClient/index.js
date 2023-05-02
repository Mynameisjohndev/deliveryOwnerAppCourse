import { CardClientOnpress, CardClientColumn, CardClientContainer, CardClientTitle } from "./styles"
import Select from "../../assets/ArrowRight.svg"
import User from "../../assets/User.svg"

const CardClient = ({ item, onPress }) => {
  const { name, uid } = item;
  return (
    <CardClientContainer>
      <User style={{marginLeft: 16}}/>
      <CardClientColumn>
        <CardClientTitle>{name}</CardClientTitle>
      </CardClientColumn>
      <CardClientOnpress {...{ onPress }}>
        <Select />
      </CardClientOnpress>
    </CardClientContainer>
  )
}

export { CardClient }