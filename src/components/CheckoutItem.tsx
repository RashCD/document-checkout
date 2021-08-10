import React, { useContext, useEffect, useState } from 'react';
import CTAButton from '../components/CTAButton';
import Button from '../components/Button';
import Icon from '../components/Icon';
import PlusIcon from '../assets/icons/square-plus.svg';
import MinusIcon from '../assets/icons/square-minus.svg';
import Styles from '../assets/styles/components/CheckoutItem.module.scss';
import { promoTypes } from '../util/product';
import { CartContext } from '../context/CartContext';
import { priceString } from '../util/format';

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

const CheckoutItem = (props: checkoutItemTypes) => {
  const { id, title, price, currency, promo, image } = props;
  const { deleteProduct, setTotal } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [promoText, setPromoText] = useState('');
  const [isPromoSuccess, setIsPromoSuccess] = useState(false);

  const priceAfterDiscount = isPromoSuccess ? promo?.discountPrice : price;
  const totalPrice = priceString.format(count * Number(priceAfterDiscount));
  const hasPromocode = !!promo?.code;
  const purchaseCountRequired = promo?.eligibility.purchaseItem || 0;
  const displayPurchaseCountEligibility = purchaseCountRequired - count;

  useEffect(() => {
    if (id) {
      setTotal((prev) => ({
        ...prev,
        [id]: {
          count,
          price: totalPrice,
        },
      }));
    }
  }, [count, id, setTotal, totalPrice]);

  useEffect(() => {
    if (count < (promo?.eligibility.purchaseItem || false))
      return setIsPromoSuccess(false);
  }, [count, promo?.eligibility.purchaseItem]);

  const applyPromocode = () => {
    if (!promoText) {
      alert('You did not enter any promocode.');
    } else if (count < (promo?.eligibility.purchaseItem || false)) {
      alert('You did not meet the requirements.');
    } else if (promoText !== promo?.code) {
      alert('You entered a wrong promocode. Please try again.');
    } else {
      return setIsPromoSuccess(true);
    }
  };

  return (
    <div className={Styles.checkoutItem}>
      <div className={Styles.checkoutTop}>
        <p className={Styles.checkoutIndicator}>
          {hasPromocode &&
            `Save ${currency}${promo?.eligibility.discount} with promocode ${promo?.code}`}
        </p>
        <CTAButton
          className={Styles.checkoutDelete}
          onButtonClick={() => {
            if (id) {
              deleteProduct(id);
              setCount(0);
            }
          }}
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
          <div className={Styles.checkoutPrice}>
            {isPromoSuccess ? (
              <div className={Styles.checkoutPriceDiscount}>
                <del>
                  {currency}
                  {price}
                </del>
                <p>
                  {currency}
                  {promo?.discountPrice}
                </p>
              </div>
            ) : (
              <p>
                {currency}
                {price}
              </p>
            )}
          </div>
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
      {hasPromocode && (
        <div className={Styles.checkoutBottom}>
          <p className={Styles.checkoutPromoText}>
            {displayPurchaseCountEligibility > 0
              ? `Purchase another ${displayPurchaseCountEligibility} items to receive
            discount`
              : 'You are eligible to receive discount. You can apply promocode to your purchase'}
          </p>
          <div className={Styles.checkoutPromo}>
            {isPromoSuccess ? (
              <p className={Styles.promoApplied}>Promocode Applied</p>
            ) : (
              <>
                <input
                  type="text"
                  className={Styles.checkoutPromoInput}
                  onChange={(event) => setPromoText(event.currentTarget.value)}
                />
                <CTAButton
                  className={Styles.checkoutPromoButton}
                  onButtonClick={applyPromocode}
                >
                  Add Promocode
                </CTAButton>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutItem;
