import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect, useRef } from 'react';
import { fetchData, updateCart } from './components/firebase/fireb-db';

function App() {
  const show = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  var cartdat = useRef();
  var flagRef = useRef(true);
  const dispatch = useDispatch();

  const fun = async () => {
    const data = await fetchData()
    console.log(data)
  }
  useEffect(() => {
    const isInitial = flagRef.current;
    if (isInitial) {
      flagRef.current = false;
      fun()
      // const newCart = cartdat.current.items ? cartdat.current : {items:[], totalQuantity:cartdat.current.totalQuantity}
      // dispatch(cartActions.replaceCart(newCart));
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
