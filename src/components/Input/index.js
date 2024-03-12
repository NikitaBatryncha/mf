import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.sass';

export default function Input(props) {
  return (
    <input
      className={styles.input}
      onChange={(e) => props.setValue(e.target.value)}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}