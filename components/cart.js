import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = ({ cartItems }) => {
  let totalQuantity = cartItems.reduce(
    (acc, ele) => acc + ele.data.quantity,
    0
  );

  let totalPrice = cartItems.reduce(
    (acc, ele) => acc + ele.data.price * ele.data.quantity,
    0
  );

  console.log(totalPrice);

  return (
    <Container>
      <CartItems>
        {cartItems
          .filter((item) => item.data.quantity > 0)
          .map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
      </CartItems>
      <StreightLine></StreightLine>
      <TotalInfo>
        <TotalQuantity>Total Quantity: {totalQuantity}</TotalQuantity>
        <TotalPrice>Total Price: ${totalPrice}</TotalPrice>
      </TotalInfo>
    </Container>
  );
};

export default Cart;

export const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;

export const CartItems = styled.article``;

export const TotalInfo = styled.div`
  border: 1px dotted green;
  padding: 10px 20px;
  margin: 20px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

export const TotalQuantity = styled.b``;

export const TotalPrice = styled.b``;

export const StreightLine = styled.hr`
  margin: 20px 20px;
`;