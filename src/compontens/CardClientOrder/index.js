import { useState } from "react";
import { OpenOrderInfo } from "../OpenOrderInfo";
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

const CardClientOrder = ({ order, client }) => {
  const [visible, setVisible] = useState(false);
  const { payment, selectedAddress, selectedOrder, status } = order;
  const { item, quantity, price } = selectedOrder;
  const { url, name } = item;

  const openAndCloseModal = () => {
    setVisible(!visible);
  }

  return (
    <CardClientOrderContainer onPress={()=>openAndCloseModal()}>
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
      <OpenOrderInfo {...{order,visible,action: openAndCloseModal, client}}/>
    </CardClientOrderContainer>
  )
}

export { CardClientOrder }