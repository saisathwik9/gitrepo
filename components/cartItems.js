import {
  Container,
  ImgContainer,
  ItemInfo,
  Title,
  Quantity,
  DeleteItemButton,
  Price,
  ItemDetails,
  PriceContainer,
} from "./CartItem.styles";
import { db } from "../db-config/database";

const CartItem = ({ id, data }) => {
  const { imgUrl, quantity, price, name } = data;
  const removeFromCart = () => {
    const cartItem = db.collection("cartItems").doc(id);

    cartItem.get().then((item) => {
      if (item.exists) {
        cartItem.update({ quantity: item.data().quantity - 1 });
      }
    });
  };

  return (
    <Container>
      <ImgContainer>
        <img src={imgUrl} />
      </ImgContainer>
      <ItemInfo>
        <Title>{name}</Title>
        <ItemDetails>
          <Quantity>
            Quantity: <b>{quantity}</b>
          </Quantity>
          <DeleteItemButton onClick={() => removeFromCart()}>
            Delete
          </DeleteItemButton>
        </ItemDetails>
      </ItemInfo>
      <PriceContainer>
        <Price>${price}</Price>
        <div>
          {quantity} * {price} : ${quantity * price}
        </div>
      </PriceContainer>
    </Container>
  );
};

export default CartItem;