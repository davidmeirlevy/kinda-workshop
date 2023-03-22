import React from 'react';
import Layout from '../components/Layout';
// import {Cart} from '@kinda-workshop/cart';
const Cart = React.lazy(() => import('cart-app/Module'));

export function CartPage() {
  return (
    <Layout>
      <Cart/>
    </Layout>
  );
}

export default CartPage;
