import clsx from "clsx";
import styles from './styles.module.sass';

export default function HomepageHero({ openModal }) {
  return (
    <section className={clsx(styles.hero)}>
      <div className={clsx('container', styles.hero__container, 'flex', 'column')}>
        <h1 className={clsx("title", styles.hero__title)}>
          Готовое решение для аутентификации<br/>и&nbsp;авторизации
        </h1>
        <p className={clsx(styles.hero__descr)}>
          Централизованная база данных, которая хранит информацию о&nbsp;пользователях и&nbsp;ресурсах компьютерной сети, такую как имена пользователей, пароли, группы, права доступа и&nbsp;другую метаинформацию.
        </p>
        <a href="" className={clsx("linkButton", styles.hero__linkButton)} onClick={(e) => {e.preventDefault(); openModal()}}>
        Подключить бесплатно
          <img rel="preload" src={'img/return.svg'} />
        </a>
      </div>
    </section>
  );
}
