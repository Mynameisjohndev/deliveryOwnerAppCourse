import { CardProductOnpress, CardProductColumn, CardProductContainer, CardProductImage, CardProductSubTitle, CardProductTitle } from "./styles"
import Select from "../../assets/ArrowRight.svg"

const CardProduct = ({ item, onPress }) => {
  const { name, description, url } = item;
  return (
    <CardProductContainer>
      <CardProductImage {...{ source: { uri: url } }} />
      <CardProductColumn>
        <CardProductTitle>{name}</CardProductTitle>
        <CardProductSubTitle>{description}</CardProductSubTitle>
      </CardProductColumn>
      <CardProductOnpress {...{onPress}}>
        <Select />
      </CardProductOnpress>
    </CardProductContainer>
  )
}

export { CardProduct }