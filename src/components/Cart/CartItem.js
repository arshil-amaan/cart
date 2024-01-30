import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, price, id } = props.item;
  const dispatch = useDispatch();
  const reduceQtyHandler = () => {
    dispatch(cartActions.removeFromCart(id))
  }
  const increseQtyHandler = (state) => {
    dispatch(cartActions.addToCart({ id, price, title }))
  }


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${quantity * price.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={reduceQtyHandler}>-</button>
          <button onClick={increseQtyHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
