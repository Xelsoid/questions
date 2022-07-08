import React from 'react';

const Label = ({labelText, children}) => {
  return (
    <label>{labelText}<br/>{children}</label>
  );
}

export default Label;
