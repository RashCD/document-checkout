import React, { useState } from 'react';
import CTAButton from '../components/CTAButton';
import Button from '../components/Button';
import Icon from '../components/Icon';
import PlusIcon from '../assets/icons/square-plus.svg';
import MinusIcon from '../assets/icons/square-minus.svg';
import Styles from '../assets/styles/components/CheckoutItem.module.scss';

type checkoutItemTypes = {
  title?: string;
  price?: string;
};

const CheckoutItem = (props: checkoutItemTypes) => {
  const { title, price } = props;
  const [count, setCount] = useState(0);
  const discountPrice = 0;
  const promoDescription = 'This item got promo';

  return (
    <div className={Styles.checkoutItem}>
      <div className={Styles.checkoutTop}>
        <p className={Styles.checkoutIndicator}>This is an indicator</p>
        <CTAButton className={Styles.checkoutDelete} onButtonClick={() => {}}>
          Delete
        </CTAButton>
      </div>
      <div className={Styles.checkoutMiddle}>
        <img src="" alt="" className={Styles.checkoutImage} />
        <div className={Styles.checkoutDetails}>
          <p className={Styles.checkoutTitle}>{title}</p>
          <p className={Styles.checkoutPrice}>{price}</p>
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
          <div className={Styles.checkoutDiscount}>{discountPrice}</div>
        </div>
      </div>
      <div className={Styles.checkoutBottom}>
        <p>{promoDescription}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
