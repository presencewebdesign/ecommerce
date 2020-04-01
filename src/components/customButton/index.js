import React from 'react';
import './style.scss';
const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button class="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
