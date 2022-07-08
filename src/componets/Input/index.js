import React from 'react';

const Input = ({inputState, handleOnChange, inputType='text',isReadOnly=false}) => {
  return (
    <input type={inputType} value={inputState} onChange={handleOnChange} readOnly={isReadOnly}/>
  );
}

export default Input;
