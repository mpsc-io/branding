import React from 'react';
import '../Styles/CustomButton.css';

const CustomButton = props => {
    return (
      <button type={props.type} className={`${props.class}`} onClick={props.onClick}>
        {props.children}
      </button>
    );
  };
  
export default CustomButton;