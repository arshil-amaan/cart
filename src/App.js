import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect, useRef } from 'react';
import { updateCart } from './components/firebase hooks/usefetch';
import { cartActions } from './store/cart-slice';
import { getDatabase, ref, onValue } from "firebase/database";

function App() {
  const show = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  var flagRef = useRef(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const isInitial = flagRef.current;
    if (isInitial < 1) {
      flagRef.current++;
      onValue(ref(getDatabase(), 'cart/'), (snapshot) => {
        let val = snapshot.val();
        if(val.totalQuantity===0) val={items:[],totalQuantity:0}
        dispatch(cartActions.replaceCart(val))
      })
      return;
    }
    updateCart(cart);
  }, [cart, dispatch])




  return (
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
