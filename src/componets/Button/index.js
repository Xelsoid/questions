import React from 'react';

const Button = ({buttonLabel, handleOnClick}) => {
  return (
    <button type='button' onClick={handleOnClick}>{buttonLabel}</button>
  );
}

export default Button;
