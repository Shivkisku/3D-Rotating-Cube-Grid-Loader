// components/Loader.js

import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
