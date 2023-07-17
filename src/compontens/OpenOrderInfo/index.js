import { OpenOrderInfoCardAddress, OpenOrderInfoCardAddressInfo, OpenOrderInfoCardAddressInfoText, OpenOrderInfoCardOrder, OpenOrderInfoCardOrderImage, OpenOrderInfoColumn, OpenOrderInfoContainer, OpenOrderInfoContent, OpenOrderInfoContentPrice, OpenOrderInfoContentRow, OpenOrderInfoContentTitle, OpenOrderInfoOverlay, OpenOrderInfoPressToClose, OpenOrderInfoTitle } from "./styles"
import Delete from "../../assets/close.svg";
import Apartment from "../../assets/apartment.svg";
import Home from "../../assets/home.svg";
import { useState } from "react";
import { Switch } from "react-native";
import { useEffect } from "react";
import { handleUpdateOrderStatus } from "./services";
import { useContextApp } from "../../context";

const OpenOrderInfo = ({ order, visible, action, client }) => {
  const { selectedAddress, selectedOrder, status } = order;
  const { item } = selectedAddress;
  const { addresNumber, complement, district, referencePoint, selected, street, surname } = item;
  const { quantity, price } = selectedOrder;
  const [firstOption, setFirstOption] = useState(status === "deliveried" ? false : true);
  const [secondOption, setSecondOption] = useState(status === "deliveried" ? true : false);
  const newOrderStatus = firstOption ? "in preparation" : "deliveried";

  useEffect(() => {
    handleUpdateOrderStatus({order, newOrderStatus, visible, client});
  }, [firstOption, secondOption]);

  return (
    <OpenOrderInfoContainer visible={visible}>
      <OpenOrderInfoOverlay onPress={action}>
        <OpenOrderInfoContent>
          <OpenOrderInfoPressToClose onPress={action}>
            <Delete width={20} height={20} />
          </OpenOrderInfoPressToClose>
          <OpenOrderInfoTitle>Informações do pedido</OpenOrderInfoTitle>
          <OpenOrderInfoCardAddress>
            {selected === "apartment" ? <Apartment /> : <Home />}
            <OpenOrderInfoCardAddressInfo>
              <OpenOrderInfoColumn>
                <OpenOrderInfoCardAddressInfoText>
                  Rua: {street}
                </OpenOrderInfoCardAddressInfoText>
                <OpenOrderInfoCardAddressInfoText>
                  Bairro: {district}
                </OpenOrderInfoCardAddressInfoText>
                <OpenOrderInfoCardAddressInfoText>
                  Ponto de referência: {referencePoint}
                </OpenOrderInfoCardAddressInfoText>
                <OpenOrderInfoCardAddressInfoText>
                  Número: {addresNumber}
                </OpenOrderInfoCardAddressInfoText>
                <OpenOrderInfoCardAddressInfoText>
                  Complemento: {complement}
                </OpenOrderInfoCardAddressInfoText>
                <OpenOrderInfoCardAddressInfoText>
                  Apelido: {surname}
                </OpenOrderInfoCardAddressInfoText>
              </OpenOrderInfoColumn>
            </OpenOrderInfoCardAddressInfo>
          </OpenOrderInfoCardAddress>
          <OpenOrderInfoCardOrder>
            <OpenOrderInfoCardOrderImage source={{ uri: selectedOrder.item.url }} />
            <OpenOrderInfoContentRow>
              <OpenOrderInfoContentTitle>{quantity}x {selectedOrder.item.name}</OpenOrderInfoContentTitle>
              <OpenOrderInfoContentPrice>{price}</OpenOrderInfoContentPrice>
            </OpenOrderInfoContentRow>
          </OpenOrderInfoCardOrder>
          <OpenOrderInfoTitle>Atualizar status</OpenOrderInfoTitle>
          <OpenOrderInfoColumn>
            <OpenOrderInfoContentRow style={{ justifyContent: "space-between", width: "100%" }}>
              <OpenOrderInfoTitle>Em preparo</OpenOrderInfoTitle>
              <Switch value={firstOption} onChange={() => {
                setFirstOption(!firstOption);
                setSecondOption(!secondOption);
              }} />
            </OpenOrderInfoContentRow>
            <OpenOrderInfoContentRow style={{ justifyContent: "space-between", width: "100%" }}>
              <OpenOrderInfoTitle>Entregue</OpenOrderInfoTitle>
              <Switch value={secondOption} onChange={() => {
                setSecondOption(!secondOption);
                setFirstOption(!firstOption);
              }} />
            </OpenOrderInfoContentRow>
          </OpenOrderInfoColumn>
        </OpenOrderInfoContent>
      </OpenOrderInfoOverlay>
    </OpenOrderInfoContainer>
  )
}

export { OpenOrderInfo }
