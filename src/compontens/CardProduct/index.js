import { CardProductOnpress, CardProductColumn, CardProductContainer, CardProductImage, CardProductSubTitle, CardProductTitle } from "./styles"
import Select from "../../assets/ArrowRight.svg"

const CardProduct = ({ item }) => {
  const { image, name } = item;
  return (
    <CardProductContainer>

      <CardProductImage {...{ source: { uri: image } }} />
      <CardProductColumn>
        <CardProductTitle>{name}</CardProductTitle>
        <CardProductSubTitle>{name}</CardProductSubTitle>
      </CardProductColumn>
      <CardProductOnpress>
        <Select />
      </CardProductOnpress>
    </CardProductContainer>
  )
}

export { CardProduct }