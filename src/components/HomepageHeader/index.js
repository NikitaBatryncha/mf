import clsx from 'clsx';
import styles from './styles.module.sass';

export default function HomepageHeader ({ openBurger, closeBurger }) {

  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.header__container)}>
        <div className={clsx(styles.nav, "flex")}>
          <div className={clsx(styles.nav__wrapper, styles.nav__wrapper1, "flex")}>
            <a href="#about" className={clsx(styles.nav__link)}>О нас</a>
            <a href="docs/tempo/md-install" className={clsx(styles.nav__link)}>Документация</a>
            <a href="tel:+1234567890" className={clsx(styles.nav__link)}>+7 499 444 08 82</a>
          </div>
          <a href="" className={clsx("linkButton", styles.header__linkButton)} >
            Подключить бесплатно
          </a>
          <div className={clsx(styles.nav__wrapper, styles.nav__wrapper2, "flex")}>
            <a href="#" className={clsx(styles.nav__link, styles.logo)}>
              <img src="img/logo.svg" alt="logo" className={styles.header__logo} />
            </a>
            <a href="#" className={clsx(styles.nav__link, styles.nav__linkMini, 'flex')}>
              Подключить
              <img src={'img/return-mini.svg'} />
            </a>
            <button className={styles.burger__button}onClick={(e) => {e.preventDefault(); closeBurger()}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M6.7583 17.2426L12.0009 12M12.0009 12L17.2435 6.75732M12.0009 12L6.7583 6.75732M12.0009 12L17.2435 17.2426" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </button>
          </div>
          <div className={clsx(styles.nav__wrapper, styles.nav__wrapper3, 'flex')}>
            <a href="telegramm" className={clsx(styles.nav__link, styles.nav__linkTg)}>Подписаться</a>
            <button className={styles.nav__btn}>Загрузить последнюю версию</button>
          </div>
          <button className={clsx("column", styles.burger )} onClick={(e) => {e.preventDefault(); openBurger()}}>
            <span className={styles.burger__item}></span>
            <span className={styles.burger__item}></span>
            <span className={styles.burger__item}></span>
          </button>
        </div>
      </div>
    </header>
  )
}
