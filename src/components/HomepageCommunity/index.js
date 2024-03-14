import clsx from 'clsx';
import styles from './styles.module.sass';

export default function HomepageCommunity () {
  return (
    <section className={styles.community}>
      <img rel="preload" src={'img/gradient-6.svg'} className={clsx(styles.gradient, styles.gradient6)}/>
      <img rel="preload" src={'img/gradient-6-tablet.svg'} className={clsx(styles.gradient, styles.gradient6, styles.gradient6Tablet)}/>
      <div href="/docs/tempo/md-install" className={clsx("container", styles.community__container)}>
        <div className={clsx("flex", styles.community__wrapperMain)}>
          <div className={styles.community__wrapper}>
            <h2 className={styles.community__title}>
              MultiDirectory Community
            </h2>
            <p className={styles.community__descr}>
              Группа для обсуждения и совместного улучшения первого российского мультиплатформенного LDAP-каталога.
            </p>
            <a href="Telegramm" className={clsx("flex", styles.community__link)}>
              Подписаться
            </a>
          </div>
          <img rel="preload" src="img/qr.svg" alt="qr" className={styles.community__qr}/>
        </div>
      </div>
    </section>
  );
}
