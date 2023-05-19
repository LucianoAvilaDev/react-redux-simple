// Styles
import { useSelector } from "react-redux";
import { selectProductsTotalPrice } from "../../redux/cart/cart-selectors";
import CartItem from '../cart-item';
import * as Styles from "./styles";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector(rootReducer => rootReducer.cartReducer)
  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map(product => <CartItem />)}
        <Styles.CartTotal>
          Total: R$ {productsTotalPrice}
        </Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
