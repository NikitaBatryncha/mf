import React from 'react';
import LazyLoad from 'react-lazy-load';
import clsx from 'clsx';
import styles from './styles.module.sass';
import {useState} from 'react'
import VisibilitySensor from 'react-visibility-sensor';

export default function Stack ({ openModal }) {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visibility) => {
    if (visibility) {
      setIsVisible(true)
    }
  };
  return (
        <VisibilitySensor onChange={onChange} partialVisibility>
          <div className={clsx("flex", styles.about__wrapper, styles.about__wrapper2)} style={{opacity: isVisible ? 1 : 0}}>
            <LazyLoad height={'auto'} offset={2700}>
              <>
                <img g  rel="preload" src={'img/ellipse-3.png'} className={clsx(styles.ellipse, styles.ellipse3, styles.ellipse3Desktop)}/>
                <img g  rel="preload" src={'img/ellipse-3-tablet.png'} className={clsx(styles.ellipse, styles.ellipse3, styles.ellipse3Tablet)}/>
                <img g  rel="preload" src={'img/ellipse-3-mobile.png'} className={clsx(styles.ellipse, styles.ellipse3, styles.ellipse3Mobile)}/>
              </>
            </LazyLoad>
            <div className={styles.stack}>
              <div className={clsx("flex", styles.stack__container, isVisible ? styles.animate1 : '')}>
                <div className={clsx(styles.stack__wrapper, isVisible ? styles.animate2 : '')}>
                  <h2 className={styles.stack__title}><span>Технологический</span> стек</h2>
                  <LazyLoad height={'auto'} offset={2700}>
                    <img g  src="/img/div.early-access-image-holder-768.png" alt="" className={clsx(styles.stack__img, styles.stack__img768)}/>
                  </LazyLoad>
                  <ul className={clsx(styles.list, styles.stack__list)}>
                    <li className={clsx('li', styles.stack__li)}>Сделан на&nbsp;Python и&nbsp;PostgreSQL</li>
                    <li className={clsx('li', styles.stack__li)}>По&nbsp;классической трехзвенной архитектуре для горизонтального масштабирования</li>
                    <li className={clsx('li', styles.stack__li)}>Позволяет штатными средствами масштабировать данные, обеспечивать отказоустойчивость и&nbsp;резервное копирование</li>
                    <li className={clsx('li', styles.stack__li)}>Поставляется в&nbsp;Docker, разворачивается за&nbsp;несколько минут и&nbsp;сразу готов к&nbsp;использованию</li>
                  </ul>
                  <a href="" className={clsx("linkButton", styles.stack__link)} onClick={(e) => {e.preventDefault(); openModal()}}>
                    Подключить бесплатно
                    <img g  src={'img/return.svg'} />
                  </a>
                </div>
                <LazyLoad height={'auto'} offset={2700}>
                  <img g  src="img/div.early-access-image-holder-2.png" alt="" className={clsx(styles.stack__img, styles.stack__img370)}/>
                </LazyLoad>
              </div>
            </div>
          </div>
        </VisibilitySensor>
  );
}
