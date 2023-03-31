import { CardProductOnpress, CardProductColumn, CardProductContainer, CardProductImage, CardProductSubTitle, CardProductTitle } from "./styles"
import Select from "../../assets/ArrowRight.svg"

const CardProduct = ({ item }) => {
  const { name, description, url } = item;
  return (
    <CardProductContainer>
      <CardProductImage {...{ source: { uri: url } }} />
      <CardProductColumn>
        <CardProductTitle>{name}</CardProductTitle>
        <CardProductSubTitle>{description}</CardProductSubTitle>
      </CardProductColumn>
      <CardProductOnpress>
        <Select />
      </CardProductOnpress>
    </CardProductContainer>
  )
}

export { CardProduct }