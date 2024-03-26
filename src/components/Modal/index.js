import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.sass';
import Input from '../Input';

export default function Modal ({active, setActive}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [active]);

  const closeModal = () => {
    setActive(false);
  };

  return (
    <div className={active? clsx(styles.modal, styles.active) : styles.modal} onClick={() => setActive(true)}>
      <div className={styles.modal__container}>
        <div className={styles.modal__box} onClick={e => e.stopPropagation()}>
          <img src="img/modal-dots.png" alt="logo" className={styles.gradient__modal}/>

          <button className={styles.modal__button} onClick={closeModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className={clsx('column', styles.modal__wrapper)}>
            <img src="img/logo-modal.svg" alt="logo" className={styles.modal__img}/>
            <p className={styles.modal__descr}>Нужна консультация?</p>
            <h2 className={styles.modal__title}>Оставьте свои данные и мы <span>свяжемся с вами</span></h2>
            <Input type={'text'} setValue={setName} placeholder={'ФИО'}/>
            <Input type={'tel'} setValue={setNumber} placeholder={'Номер телефона'}/>
            <Input type={'email'} setValue={setEmail} placeholder={'Электронная почта'}/>
            <Input type={'text'} setValue={setCompany} placeholder={'Название компании'}/>
            <button onClick={() => console.log(name, email, number, company)} className={styles.modal__submit}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  )
}
