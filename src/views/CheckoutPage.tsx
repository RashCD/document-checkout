import { RouteComponentProps } from '@reach/router';
import React, { useContext } from 'react';
import AppLayout from '../components/AppLayout';
import Styles from '../assets/styles/views/CheckoutPage.module.scss';
import CheckoutItem from '../components/CheckoutItem';
import { CartContext } from '../context/CartContext';
import { PRODUCT_DETAILS, PRODUCT_PROMOCODE } from '../util/product';

const CheckoutPage = (props: RouteComponentProps) => {
  const { carts } = useContext(CartContext);

  const selectedProductDetails = carts.map((cart) =>
    PRODUCT_DETAILS.find((product) => product.productID === cart.productID)
  );

  const selectedProductDetailsWithPromo = selectedProductDetails.map(
    (product) => {
      if (product?.productID === PRODUCT_PROMOCODE.product) {
        return { ...product, promo: PRODUCT_PROMOCODE };
      } else {
        return { ...product, promo: null };
      }
    }
  );

  return (
    <div className="app">
      <AppLayout title="Checkout" />
      <main className={Styles.checkoutMain}>
        {selectedProductDetailsWithPromo.map((product) => (
          <CheckoutItem
            key={product.productID}
            id={product.productID}
            title={product.productName}
            price={product.price}
            image={product.image}
            currency={product.currency}
            promo={product.promo}
          />
        ))}
      </main>
    </div>
  );
};

export default CheckoutPage;
