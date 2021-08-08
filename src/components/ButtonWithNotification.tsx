import React from 'react';
import Button, { buttonTypes } from './Button';
import Styles from '../assets/styles/components/ButtonWithNotification.module.scss';

type buttonWithNotificationTypes = {
  count?: number;
} & buttonTypes;

const ButtonWithNotification = (props: buttonWithNotificationTypes) => {
  const { count = 0, onButtonClick, children } = props;
  return (
    <div className={Styles.buttonContainer}>
      <Button className={Styles.button} onButtonClick={onButtonClick}>
        {children}
      </Button>
      {count > 0 && <div className={Styles.circle}>{count}</div>}
    </div>
  );
};

export default ButtonWithNotification;
