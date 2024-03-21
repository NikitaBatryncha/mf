import React, {useEffect} from 'react';
import styles from './styles.module.sass';
import clsx from 'clsx';


export default function ModalImage ({ active, setActive, imageUrl }) {
  const closeImage = () => {
    setActive(false);
  };

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [active]);

  return (
    <div className={active? styles.active : styles.modal} onClick={closeImage}>
      <img src={imageUrl} alt="Modal" className={styles.modalImage} />
    </div>
  );
};
