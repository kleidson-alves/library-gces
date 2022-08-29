import React from 'react';
import styles from './Style';

function LoginInput({
  title, type, icon, onChange, value,
}) {
  return (
    <div style={styles[type]}>
      <div style={styles.icon}>
        {icon}
      </div>
      <input placeholder={title} style={styles.input} type={type} onChange={(text) => onChange(text)} value={value || ''} />
    </div>
  );
}

export default LoginInput;
