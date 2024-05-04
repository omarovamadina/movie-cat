// components/atoms/input.js
import React from 'react';
import styles from './Input.module.scss';

const Input = ({className, value, onChange, placeholder}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className={styles.input + ' ' + className}
      placeholder={placeholder}
    />
  );
};

export default Input;

// input.module.scss
/* Styles for the Input component */