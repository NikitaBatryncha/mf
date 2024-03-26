import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import clsx from 'clsx';
import styles from './styles.module.sass';
import VisibilitySensor from 'react-visibility-sensor';
import Link from '../../Link';

export default function About({ openModal }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMainImageLoaded, setIsMainImageLoaded] = useState(false);

  const onChange = (visibility) => {
    if (visibility) {
      setIsVisible(true);
    }
  };

  const handleMainImageLoad = () => {
    setIsMainImageLoaded(true);
  };

  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
      <div className={clsx("flex", styles.about__wrapper, styles.about__wrapper1)} style={{ opacity: isVisible ? 1 : 0 }}>
        <img src={'img/ellipse-2.png'} className={clsx(styles.ellipse, styles.ellipse2, styles.ellipse2Desktop)} />
        <img src={'img/ellipse-2-mobile.png'} className={clsx(styles.ellipse, styles.ellipse2, styles.ellipse2Mobile)} />
        <img src={'img/ellipse-2-tablet.png'} className={clsx(styles.ellipse, styles.ellipse2, styles.ellipse2Tablet)} />

        <div className={clsx(styles.about__wrapperContent, isVisible ? styles.animate1 : '')}>
          <h2 className={styles.about__title}>
            Бесплатный LDAP каталог,<span> разработанный</span> &laquo;с&nbsp;нуля&raquo; <span className={styles.about__titleChild}> российской компанией</span>
          </h2>
          <LazyLoad height={'auto'} offset={100}>
            <img
              src="img/div.early-access-image-holder-768.png"
              alt=""
              className={clsx(styles.about__img, styles.about__imgTablet768)}
              onLoad={handleMainImageLoad}
            />
          </LazyLoad>
          <ul className={clsx(styles.list, styles.about__list)}>
            <li className={clsx('li', styles.about__li)}>Продукт для единой аутентификации и&nbsp;авторизации доступа к&nbsp;любым ресурсам</li>
            <li className={clsx('li', styles.about__li)}>Поставляется в&nbsp;виде коробочного решения с&nbsp;открытым исходным кодом</li>
            <li className={clsx('li', styles.about__li)}>Не&nbsp;базируется на&nbsp;сторонних проприетарных и&nbsp;открытых продуктах и&nbsp;не&nbsp;несет их&nbsp;рисков и&nbsp;ограничений</li>
            <li className={clsx('li', styles.about__li)}>Не&nbsp;содержит небезопасных протоколов и&nbsp;функций, таких как MD5 и&nbsp;NTLM</li>
          </ul>
          <Link name="Узнать&nbsp;подробнее" path="/" />
        </div>
        <div className={clsx(styles.about__wrapperImg, isVisible ? styles.animate2 : '')}>
          <LazyLoad offset={100} debounce={false}>
            <img
              rel="preload"
              src="img/div.early-access-image-holder.png"
              alt=""
              className={clsx(styles.about__img, styles.about__imgDesktop)}
            />
          </LazyLoad>
          <img src="img/about-tablet.png" alt="" className={clsx(styles.about__img, styles.about__imgTablet)} />
          <img src="img/about-mobile.png" alt="" className={clsx(styles.about__img, styles.about__imgMobile)} />
        </div>
      </div>
    </VisibilitySensor>
  );
}
