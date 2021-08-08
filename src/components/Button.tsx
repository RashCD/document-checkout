import React from 'react';
import Styles from '../assets/styles/components/Button.module.scss';

type buttonTypes = {
  onButtonClick: (event: React.MouseEvent) => void;
  children: React.ReactChild;
};

const Button = (props: buttonTypes) => {
  return (
    <button
      type="button"
      className={Styles.button}
      onClick={props.onButtonClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
