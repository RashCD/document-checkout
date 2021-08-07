import React from 'react';
import Styles from '../assets/styles/components/Button.module.scss';

type buttonTypes = {
  text: string;
  onButtonClick: (event: React.MouseEvent) => void;
};

const Button = (props: buttonTypes) => {
  return (
    <button
      type="button"
      className={Styles.button}
      onClick={props.onButtonClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
