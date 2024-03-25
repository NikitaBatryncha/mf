import clsx from 'clsx';
import styles from './styles.module.sass';

export default function HomepageHeader ({ openBurger, closeBurger, openModal }) {

  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.header__container)}>
        <div className={clsx(styles.nav, "flex")}>
          <div className={clsx(styles.nav__wrapper, styles.nav__wrapper1, "flex", 'nav__wrapper1_src-components-HomepageHeader-styles-module')}>
            <a href="#about" className={clsx(styles.nav__link)}>О нас</a>
            <a href="/docs/tempo/md-install" className={clsx(styles.nav__link)}>Документация</a>
            <a href="tel:+1234567890" className={clsx(styles.nav__link)}>+7 499 444 08 82</a>
          </div>
          <a href="" className={clsx("linkButton", styles.header__linkButton)} onClick={(e)=> {e.preventDefault(); openModal();}}>
            Подключить бесплатно
            <img rel="preload" src={'img/return.svg'} />
          </a>
          <div className={clsx(styles.nav__wrapper, styles.nav__wrapper2, "flex", 'nav__wrapper2_src-components-HomepageHeader-styles-module')}>
            <a href="#" className={clsx(styles.nav__link, styles.logo)}>
              <img rel="preload" src="/img/logo.svg" alt="logo" className={styles.header__logo} />
            </a>
            <a href="#" className={clsx(styles.nav__link, styles.nav__linkMini, 'flex')}>
              Подключить
              <img rel="preload" src={'img/return-mini.svg'} />
            </a>
            <button className={styles.burger__button}onClick={(e) => {e.preventDefault(); closeBurger()}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M6.7583 17.2426L12.0009 12M12.0009 12L17.2435 6.75732M12.0009 12L6.7583 6.75732M12.0009 12L17.2435 17.2426" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </button>
          </div>
          <div className={clsx(styles.nav__wrapper, styles.nav__wrapper3, 'flex', 'nav__wrapper3_src-components-HomepageHeader-styles-module')}>
            <a href="telegramm" className={clsx(styles.nav__link, styles.nav__linkTg)}>Подписаться</a>
            <button className={styles.nav__btn}>Загрузить последнюю версию</button>
          </div>
          <button className={clsx("column", styles.burger )} onClick={(e) => {e.preventDefault(); openBurger()}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M3.8248 18.7996C3.458 18.7996 3.1454 18.6746 2.887 18.4246C2.629 18.1746 2.5 17.858 2.5 17.4748C2.5 17.108 2.629 16.7954 2.887 16.537C3.1454 16.279 3.458 16.15 3.8248 16.15H20.2C20.55 16.15 20.8542 16.279 21.1126 16.537C21.3706 16.7954 21.4996 17.108 21.4996 17.4748C21.4996 17.858 21.3706 18.1746 21.1126 18.4246C20.8542 18.6746 20.55 18.7996 20.2 18.7996H3.8248ZM3.8248 13.3246C3.458 13.3246 3.1454 13.1954 2.887 12.937C2.629 12.679 2.5 12.3666 2.5 11.9998C2.5 11.6166 2.629 11.3 2.887 11.05C3.1454 10.8 3.458 10.675 3.8248 10.675H20.2C20.55 10.675 20.8542 10.8 21.1126 11.05C21.3706 11.3 21.4996 11.6166 21.4996 11.9998C21.4996 12.3666 21.3706 12.679 21.1126 12.937C20.8542 13.1954 20.55 13.3246 20.2 13.3246H3.8248ZM3.8248 7.8496C3.458 7.8496 3.1454 7.7164 2.887 7.45C2.629 7.1832 2.5 6.8748 2.5 6.5248C2.5 6.1416 2.629 5.8208 2.887 5.5624C3.1454 5.304 3.458 5.1748 3.8248 5.1748H20.2C20.55 5.1748 20.8542 5.304 21.1126 5.5624C21.3706 5.8208 21.4996 6.1332 21.4996 6.4996C21.4996 6.8832 21.3706 7.2042 21.1126 7.4626C20.8542 7.7206 20.55 7.8496 20.2 7.8496H3.8248Z" fill="white" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
