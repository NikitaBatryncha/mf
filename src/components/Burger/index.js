import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.sass';
import HomepageHeader from '../HomepageHeader';
import HomepageFooter from '../HomepageFooter';

export default function BurgerMenu ({active, closeBurger, openModal }) {
  return (
    <div className={active ? clsx(styles.burger, styles.active) : styles.burger} onClick={a => {a.stopPropagation(), closeBurger()}}>
      <div className={styles.burger__wrapper}>
        <HomepageHeader closeBurger={closeBurger} openModal={openModal}/>
        <span className={styles.burger__span}></span>
        <HomepageFooter />
      </div>
    </div>
  )
}
