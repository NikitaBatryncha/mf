import clsx from 'clsx';
import styles from './styles.module.sass';
import {useState} from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import Link from '../../Link';

export default function About ({ openModal }) {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visibility) => {
    if (visibility) {
      setIsVisible(true)
    }
  };
  return (
      <VisibilitySensor onChange={onChange} partialVisibility>
          <div className={clsx("flex", styles.about__wrapper, styles.about__wrapper1)} style={{opacity: isVisible ? 1 : 0}}>
            <img src={'img/ellipse-2.png'} className={clsx(styles.ellipse, styles.ellipse2, styles.ellipse2Desktop )}/>
            <img src={'img/ellipse-2-mobile.png'} className={clsx(styles.ellipse, styles.ellipse2, styles.ellipse2Mobile )}/>
            <img src={'img/ellipse-2-tablet.png'} className={clsx(styles.ellipse, styles.ellipse2, styles.ellipse2Tablet)}/>
            <div className={clsx(styles.about__wrapperContent, isVisible ? styles.animate1 : '')}>
              <h2 className={styles.about__title}>
              Бесплатный LDAP каталог,<span>&nbsp;разработанный</span> «с нуля»&nbsp;<span className={styles.about__titleChild}> российской компанией</span>
              </h2>
              <img src="img/div.early-access-image-holder-768.svg" alt="" className={clsx(styles.about__img, styles.about__imgTablet768)}/>
              <ul className={clsx(styles.list, styles.about__list)}>
                <li className={clsx('li', styles.about__li)}>Продукт для единой аутентификации и авторизации доступа&nbsp;к&nbsp;любым ресурсам</li>
                <li className={clsx('li', styles.about__li)}>Поставляется в виде коробочного решения с&nbsp;открытым&nbsp;исходным кодом</li>
                <li className={clsx('li', styles.about__li)}>Не базируется на сторонних проприетарных и открытых продуктах и не несет их рисков и ограничений</li>
                <li className={clsx('li', styles.about__li)}>Не содержит небезопасных протоколов и функций, таких&nbsp;как&nbsp;MD5 и NTLM</li>
              </ul>
              <Link name="Узнать подробнее" path="/" />
            </div>
            <div className={clsx(styles.about__wrapperImg, isVisible ? styles.animate2 : '')}>
              <img src="img/div.early-access-image-holder.svg" alt="" className={clsx(styles.about__img, styles.about__imgDesktop)}/>
              <img src="img/webp/about-tablet.webp" alt="" className={clsx(styles.about__img, styles.about__imgTablet)}/>
            </div>
          </div>
      </VisibilitySensor>
  );
}
