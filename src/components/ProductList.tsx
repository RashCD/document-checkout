import { navigate } from '@reach/router';
import React, { useContext } from 'react';
import Styles from '../assets/styles/components/ProductList.module.scss';
import { CartContext } from '../context/CartContext';
import { PRODUCT_DETAILS } from '../util/product';
import CTAButton from './CTAButton';

const ProductList = () => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <div className={Styles.productList}>
      {PRODUCT_DETAILS.map(({ productID, productName, currency, price }) => (
        <div className={Styles.productContainer} key={productID}>
          <img className={Styles.productImage} src="" alt="" />
          <div className={Styles.productTitle}>
            <p>{productName}</p>
          </div>
          <div className={Styles.productPricing}>
            <p>
              {currency}
              {price}
            </p>
          </div>
          <div className={Styles.productAction}>
            <CTAButton onButtonClick={() => addProductToCart(productID)}>
              Add to Cart
            </CTAButton>
            <CTAButton
              onButtonClick={() => {
                addProductToCart(productID);
                navigate('/checkout');
              }}
            >
              Buy Now
            </CTAButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
