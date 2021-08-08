import React from 'react';
import Styles from '../assets/styles/components/ProductList.module.scss';
import Cookie from '../util/cookie';
import { COOKIE_NAME } from '../util/typeConstant';
import CTAButton from './CTAButton';

type productDetailsTypes = {
  productID: string;
  productName: string;
  price: string;
  currency: '$';
};

const PRODUCT_DETAILS: productDetailsTypes[] = [
  {
    productID: 'wf',
    productName: 'workflow',
    price: '199.99',
    currency: '$',
  },
  {
    productID: 'docgen',
    productName: 'Document Generation',
    price: '9.99',
    currency: '$',
  },
  {
    productID: 'form',
    productName: 'Form',
    price: '99.99',
    currency: '$',
  },
  {
    productID: 'tax',
    productName: 'Taxation',
    price: '20.10',
    currency: '$',
  },
];

const addToCartButton = (productID: string) => {
  return Cookie.append(COOKIE_NAME.PRODUCT_IDS, { productID });
};

const ProductList = () => {
  return (
    <div className={Styles.productList}>
      {PRODUCT_DETAILS.map(({ productID, productName, currency, price }) => (
        <div className={Styles.productContainer} key={productID}>
          <div className={Styles.productImage}></div>
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
            <CTAButton onButtonClick={() => addToCartButton(productID)}>
              Add to Cart
            </CTAButton>
            <CTAButton onButtonClick={() => {}}>Buy Now</CTAButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
