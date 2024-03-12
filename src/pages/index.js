import React, {useState, useEffect} from 'react'
import clsx from 'clsx';
import styles from './index.module.sass';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHero from '../components/HomepageHero';
import HomepageAbout from '../components/HomepageAbout';
import HomepageRoadmap from '../components/HomepageRoadmap';
import HomepageHeader from '../components/HomepageHeader';
import HomepageCommunity from '../components/HomepageCommunity';
import HomepageDemo from '../components/HomepageDemo';
import HomepageFooter from '../components/HomepageFooter';
import Modal from '../components/Modal';
import BurgerMenu from '../components/Burger';

export default function Home() {
  const [modalActive, setModalActive] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };

  const openBurger = () => {
    setBurgerActive(true);
  };

  const closeBurger = () => {
    setBurgerActive(false);
  };

  return (
    <div className={styles.body__container}>
      <Modal active={modalActive} setActive={setModalActive} />
      <BurgerMenu active={burgerActive} closeBurger={closeBurger}/>
      <HomepageHeader openBurger={openBurger}/>
      <main>
        <HomepageHero openModal={openModal}/>
        <HomepageAbout openModal={openModal}/>
        <HomepageFeatures />
        <HomepageRoadmap openModal={openModal}/>
        <HomepageDemo/>
        <HomepageCommunity/>
      </main>
      <HomepageFooter />
    </div>
  );
}
