import {useState} from 'react'
import clsx from 'clsx';
import styles from './styles.module.sass';
import VisibilitySensor from 'react-visibility-sensor';
import Link from '../Link'

export default function HomepageRoadmap ({ openModal }) {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visibility) => {
    if (visibility) {
      setIsVisible(true)
    }
  };

  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
      <section className={styles.roadmap} style={{opacity: isVisible ? 1 : 0}}>
      <img rel="preload" src={'img/ellipse-roadmap.png'} className={clsx(styles.ellipse_roadmap)}/>
      <img src={'img/ellipse-roadmap-tablet.png'} className={clsx(styles.ellipse_roadmap, styles.ellipse_roadmapTablet)}/>
      <img src={'img/ellipse-roadmap-mobile.png'} className={clsx(styles.ellipse_roadmap, styles.ellipse_roadmapMobile)}/>
      <img rel="preload" src={'img/gradient-5.png'} className={clsx(styles.gradient, styles.gradient5, styles.gradient5Desktop)}/>
      <img src={'img/gradient-5-tablet.png'} className={clsx(styles.gradient, styles.gradient5, styles.gradient5Tablet)}/>
      <img src={'img/gradient-5-mobile.png'} className={clsx(styles.gradient, styles.gradient5, styles.gradient5Mobile)}/>
      <img src={'img/orbit.png'} className={styles.orbit__img}/>
      <img src={'img/orbit-tablet.svg'} className={clsx(styles.orbit__img, styles.orbit__imgTablet)}/>
      <div className={clsx("container", "column", styles.roadmap__container)}>
        <img rel="preload" src="/img/logo-blue.png" alt="logo" className={clsx(styles.logo, styles.logoDesktop)}/>
        <img src="/img/logo-blue-tablet.png" alt="logo" className={clsx(styles.logo, styles.logoTablet)}/>
        <div className={clsx("flex", "column", styles.roadmap__wrapper)}>
          <h2 className={clsx("title", styles.roadmap__title)}>
            Дорожная карта
          </h2>
          <div className={clsx("flex", "column", styles.roadmap__wrapperMini)}>
            <Link name="Заказать функционал"/>
            <p className={styles.roadmap__descr}>
              Продукт создается и развивается по текущим потребностям рынка с учетом замечаний и пожеланий от заказчиков, как с платной,<br/> так и с бесплатной версий.
            </p>
          </div>
        </div>
        <div className={clsx("flex", styles.orbit)}>  
        <span className={clsx("flex", "column", styles.orbit__item, styles.orbit__item1, isVisible ? styles.animate : '')}>
            <img src="/img/orbit-mobile.svg" className={clsx(styles.orbit__img, styles.orbit__imgMobile)}/>
            <img src="/img/roadmap-item.svg" alt="logo" className={styles.orbit__logo}/>
            <span>Kerberos</span>
          </span>
          <span className={clsx("flex", "column", styles.orbit__item, styles.orbit__item2, isVisible ? styles.animate1 : '')}>
            <img src="/img/roadmap-item.svg" alt="logo" className={styles.orbit__logo}/>
            <span>Миграция с других каталогов</span>
          </span>
          <span className={clsx("flex", "column", styles.orbit__item, styles.orbit__item3, isVisible ? styles.animate2 : '')}>
            <img src="/img/roadmap-item.svg" alt="logo" className={styles.orbit__logo}/>
            <span>Подключение доверенных доменов</span>
          </span>
        </div>
        <div className={clsx(styles.support)}>
          <div className={clsx(styles.support__wrapper, isVisible ? styles.animate : '')}>
            <h3 className={styles.support__title}>
              Поддержка <span>2FA</span>
            </h3>
            <img src="/img/roadmap-img-768.png" alt="" className={clsx(styles.support__img, styles.support__img768, isVisible ? styles.animate1 : '')}/> 
            <p className={clsx(styles.support__descr, styles.support__descr1)}>
              Интеграция с MultiFactor. Поддержка многофакторной аутентификации (MFA).
            </p>
            <p className={clsx(styles.support__descr, styles.support__descr2)}>
              Продукт нативно интегрирован с лучшем в классе поставщиком многофакторной аутентификации — Мультифактором, что позволяет отказаться от дополнительных модулей и адаптеров. <span>Все что нужно — уже внутри!</span>
            </p>
            <ul className={clsx(styles.list, styles.support__list)}>
              <li className="li">Поддержка пуш-уведомлений в&nbsp;мобильном приложении</li>
              <li className="li">Гранулированная настройка включения второго фактора по сетевым правилам и группам</li>
            </ul>
            <Link name="Узнать подробнее"/>
          </div>
          <img src="/img/support-img.svg" alt="" className={clsx(styles.support__img, styles.support__imgDesktop, isVisible ? styles.animate1 : '')}/> 
          <img src="/img/support-img-tablet.svg" alt="" className={clsx(styles.support__img, styles.support__imgTablet)}/>
          <img src="/img/support-img-mobile.png" alt="" className={clsx(styles.support__img, styles.support__imgMobile)}/>
        </div>
      </div>
    </section>
    </VisibilitySensor>
  );
}
