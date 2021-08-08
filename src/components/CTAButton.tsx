import React from 'react';
import Button, { buttonTypes } from '../components/Button';
import Styles from '../assets/styles/components/CTAButton.module.scss';

const CTAButton = (props: buttonTypes) => {
  const { children, ...rest } = props;
  return (
    <Button className={Styles.cta} {...rest}>
      {children}
    </Button>
  );
};

export default CTAButton;
