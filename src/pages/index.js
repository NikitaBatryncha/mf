import React, {useState, lazy, Suspense} from 'react'
import styles from './index.module.sass';
import VisibilitySensor from 'react-visibility-sensor';
import HomepageHeader from '../components/HomepageHeader';
import HomepageHero from '../components/HomepageHero';
import HomepageAbout from '../components/HomepageAbout';

const HomepageFeatures = lazy(() => import ("../components/HomepageFeatures"))
const HomepageRoadmap = lazy(() => import ("../components/HomepageRoadmap"))
const HomepageDemo = lazy(() => import ("../components/HomepageDemo"))
const HomepageCommunity = lazy(() => import ("../components/HomepageCommunity"))
const HomepageFooter = lazy(() => import ("../components/HomepageFooter"))
const Modal = lazy(() => import ("../components/Modal"))
const BurgerMenu = lazy(() => import ("../components/Burger"))
const ModalImage = lazy(() => import ("../components/ModalImage"))

export default function Home() {
  const [modalActive, setModalActive] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
  const [modalImageActive, setModalImageActive] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visibility) => {
    if (visibility) {
      setIsVisible(true)
    }
  };

  const openModal = () => {
    setModalActive(true);
  };

  const openImageModal = () => {
    setModalImageActive(true);
  };

  const openBurger = () => {
    setBurgerActive(true);
  };

  const closeBurger = () => {
    setBurgerActive(false);
  };

  return (
    <div className={styles.body__container}>
      <Suspense fallback={''}>
        <Modal active={modalActive} setActive={setModalActive} />
      </Suspense>
      <Suspense fallback={''}>
        <ModalImage active={modalImageActive} setActive={setModalImageActive} imageUrl={modalImageUrl} />
      </Suspense>
      <Suspense fallback={''}>
        <BurgerMenu active={burgerActive} closeBurger={closeBurger} openModal={openModal}/>
      </Suspense>
      <HomepageHeader openBurger={openBurger}  closeBurger={closeBurger} openModal={openModal}/>
      <main>
        <HomepageHero openModal={openModal}/>
        <HomepageAbout openModal={openModal}/>
        <VisibilitySensor onChange={onChange} partialVisibility>
          <Suspense fallback={''}>
            <HomepageFeatures />
          </Suspense>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange} partialVisibility>
          <Suspense fallback={''}>
            <HomepageRoadmap openModal={openModal}/>
          </Suspense>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange} partialVisibility>
          <Suspense fallback={''}>
            <HomepageDemo setModalImageUrl={setModalImageUrl} openModal={openImageModal}/>
          </Suspense>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange} partialVisibility>
          <Suspense fallback={''}>
            <HomepageCommunity/>
          </Suspense>
        </VisibilitySensor>
      </main>
      <VisibilitySensor onChange={onChange} partialVisibility>
        <Suspense fallback={''}>
          <HomepageFooter />
        </Suspense>
      </VisibilitySensor>
    </div>
  );
}
