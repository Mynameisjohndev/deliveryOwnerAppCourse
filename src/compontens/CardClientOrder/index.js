import {
  CardClientOrderContainer,
  CardClientOrderRow,
  CardClientOrderImage,
  CardClientOrderOnpress,
  CardClientOrderSubTitle,
  CardClientOrderTitle,
  CardClientOrderPrice,
  CardClientOrderStatus,
  CardClientOrderStatusTitle,
  CardClientOrderColumn
} from "./styles"

const CardClientOrder = ({ order }) => {

  const { payment, selectedAddress, selectedOrder, status } = order;
  const { item, quantity, price } = selectedOrder;
  const { url, name } = item;

  return (
    <CardClientOrderContainer>
      <CardClientOrderImage {...{ source: { uri: url } }} />
      <CardClientOrderColumn>
        <CardClientOrderRow>
          <CardClientOrderTitle>{quantity}x {name}</CardClientOrderTitle>
          <CardClientOrderPrice>{price}</CardClientOrderPrice>
        </CardClientOrderRow>
        <CardClientOrderStatus {...{ status }}>
          <CardClientOrderStatusTitle>
            {status === "in preparation" ? "Em preparação" : "Entregue"}
          </CardClientOrderStatusTitle>
        </CardClientOrderStatus>
      </CardClientOrderColumn>
    </CardClientOrderContainer>
  )
}

export { CardClientOrder }