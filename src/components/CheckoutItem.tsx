import React, { useContext, useState } from 'react';
import CTAButton from '../components/CTAButton';
import Button from '../components/Button';
import Icon from '../components/Icon';
import PlusIcon from '../assets/icons/square-plus.svg';
import MinusIcon from '../assets/icons/square-minus.svg';
import Styles from '../assets/styles/components/CheckoutItem.module.scss';
import { promoTypes } from '../util/product';
import { CartContext } from '../context/CartContext';

type checkoutItemTypes = {
  id?: string;
  title?: string;
  price?: string;
  image?: {
    src: string;
    alt: string;
  };
  currency?: string;
  promo?: promoTypes | null;
};

const priceFormat = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
});

const CheckoutItem = (props: checkoutItemTypes) => {
  const { id, title, price, currency, promo, image } = props;
  const [count, setCount] = useState(0);
  const { deleteProduct } = useContext(CartContext);
  const totalPrice = priceFormat.format(count * Number(price));
  const hasPromocode = !!promo?.code;
  const purchaseCountRequired = promo?.eligibility.purchaseItem || 0;
  const displayPurchaseCountEligibility = purchaseCountRequired - count;

  return (
    <div className={Styles.checkoutItem}>
      <div className={Styles.checkoutTop}>
        <p className={Styles.checkoutIndicator}>
          {hasPromocode &&
            `Save ${currency}${promo?.eligibility.discount} with promocode`}
        </p>
        <CTAButton
          className={Styles.checkoutDelete}
          onButtonClick={() => id && deleteProduct(id)}
        >
          Delete
        </CTAButton>
      </div>
      <div className={Styles.checkoutMiddle}>
        <img
          src={image?.src}
          alt={`${image?.alt}`}
          className={Styles.checkoutImage}
        />
        <div className={Styles.checkoutDetails}>
          <p className={Styles.checkoutTitle}>{title}</p>
          <p className={Styles.checkoutPrice}>
            {currency}
            {price}
          </p>
          <div className={Styles.checkoutCount}>
            <Button
              onButtonClick={() => setCount((count) => (count ? count - 1 : 0))}
            >
              <Icon
                size={20}
                color="black"
                src={MinusIcon}
                alt="square minus icon"
              />
            </Button>
            {count}
            <Button onButtonClick={() => setCount((count) => count + 1)}>
              <Icon
                size={20}
                color="black"
                src={PlusIcon}
                alt="square plus icon"
              />
            </Button>
          </div>
          <div className={Styles.checkoutDiscount}>
            {currency}
            {totalPrice}
          </div>
        </div>
      </div>
      <div className={Styles.checkoutBottom}>
        {hasPromocode && (
          <p>
            {displayPurchaseCountEligibility > 0
              ? `Purchase another ${displayPurchaseCountEligibility} items to received
            discount`
              : 'You are eligible to receive discount. Click add promocode to apply to your purchase'}
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckoutItem;
