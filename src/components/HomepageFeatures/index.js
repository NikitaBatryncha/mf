import clsx from 'clsx';
import styles from './styles.module.sass';
import {useState} from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const FeatureList = [
  {
    title: 'Управление пользователями, группами, ресурсами',

    description: (
      <>
        Удобно и интуитивно создавайте<br/>и управляйте любыми, привычными<br/>вам объектами системы.
      </>
    ),
    link: 'Документация'
  },
  {
    title: 'Подключение по LDAP и LDAPS протоколам',

    link: 'Документация'
  },
  {
    title: 'Сетевые политики доступа',

    description: (
      <>
        Возможность настраивать подключения для устройств<br/>и приложений по сетевым правилам с контролем доступа и условным применением второго фактора.
      </>
    ),
    link: 'Документация'
  },
  {
    title: 'Веб-интерфейс администратора',

    link: 'Документация'
  },
  {
    title: 'Компоненты для RADIUS, OIDC, SAML',

    link: 'Документация'
  },
  {
    title: 'Тут идет название фичи от Кости',

    link: 'Документация'
  },
  {
    title: 'API управления и автоматизации',

    link: 'Документация'
  },
];

export default function HomepageFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visibility) => {
    if (visibility) {
      setIsVisible(true)
    }
  };

  return (
    <VisibilitySensor onChange={onChange} partialVisibility>
    <section className={styles.features}>
      <img src={'img/gradient-3.svg'} className={clsx(styles.ellipse, styles.gradient3)}/>
      <img src={'img/gradient-4.png'} className={clsx(styles.gradient, styles.gradient4)}/>
      <div className={clsx("container", "column", styles.features__container)}>
        <h2 className={clsx("title", styles.features__title, isVisible ? styles.animate : '')}>
          Функциональные<br/><span>возможности</span>
        </h2>


        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          className={clsx(styles.Swiper, isVisible ? styles.animate1 : '')}
          pagination={{el:'.swiper-pagination', clickable: true}}
          navigation = {
            {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true
            }
          }
          modules={[Pagination, Navigation]}
        >
        <SwiperSlide className={styles.swiper__slide}>
          <div className={clsx(styles.item, styles.item1)}>
            <div className={clsx(styles.item__wrapper, "flex", "column")}>
              <img src="img/grid_item_1.svg" className={styles.item__img}/>
              <h3 className={styles.item__title}>
                {FeatureList[0].title}
              </h3>
              <p className={styles.item__descr}>
                {FeatureList[0].description}
              </p>
              <div className={clsx(styles.item__link, "flex")}>
                Документация
                <img src="img/features-arrow.svg" className={styles.item__linkItem} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <div className={clsx(styles.item, styles.item2)}>
            <div className={clsx(styles.item__wrapper, "flex", "column")}>
              <img src="img/grid_item_2.svg" className={styles.item__img}/>
              <h3 className={styles.item__title}>
              {FeatureList[1].title}
              </h3>
              <div className={clsx(styles.item__link, "flex")}>
                Документация
                <img src="img/features-arrow.svg" className={styles.item__linkItem} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <div className={clsx(styles.item, styles.item3)}>
            <div className={clsx(styles.item__wrapper, "flex", "column")}>
              <img src="img/grid_item_3.svg" className={styles.item__img}/>
              <h3 className={styles.item__title}>
                {FeatureList[2].title}
              </h3>
              <p className={styles.item__descr}>
                {FeatureList[2].description}
              </p>
              <div className={clsx(styles.item__link, "flex")}>
                Документация
                <img src="img/features-arrow.svg" className={styles.item__linkItem} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <div className={clsx(styles.item)}>
            <div className={clsx(styles.item__wrapper, "flex", "column")}>
              <img src="img/grid_item_4.svg" className={styles.item__img}/>
              <h3 className={styles.item__title}>
                {FeatureList[3].title}
              </h3>
              <div className={clsx(styles.item__link, "flex")}>
                Документация
                <img src="img/features-arrow.svg" className={styles.item__linkItem} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <div className={clsx(styles.item)}>
            <div className={clsx(styles.item__wrapper, "flex", "column")}>
              <img src="img/grid_item_5.svg" className={styles.item__img}/>
              <h3 className={styles.item__title}>
                {FeatureList[4].title}
              </h3>
              <div className={clsx(styles.item__link, "flex")}>
                Документация
                <img src="img/features-arrow.svg" className={styles.item__linkItem} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <div className={clsx(styles.item)}>
            <div className={clsx(styles.item__wrapper, "flex", "column")}>
              <img src="img/grid_item_6.svg" className={styles.item__img}/>
              <h3 className={styles.item__title}>
                {FeatureList[5].title}
              </h3>
              <div className={clsx(styles.item__link, "flex")}>
                Документация
                <img src="img/features-arrow.svg" className={styles.item__linkItem} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide}>
          <div className={clsx(styles.item, styles.itemLast)}>
            <div className={clsx(styles.item__wrapper, "flex", "column")}>
              <img src="img/grid_item_7.svg" className={styles.item__img}/>
              <h3 className={styles.item__title}>
              {FeatureList[6].title}
              </h3>
              <div className={clsx(styles.item__link, "flex")}>
                Документация
                <img src="img/features-arrow.svg" className={styles.item__linkItem} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
        <div className={styles.grid__container}>
          <img src={'img/ellipse-4.png'} className={clsx(styles.ellipse, styles.ellipse4)}/>
          <img src={'img/ellipse-4-tablet.png'} className={clsx(styles.ellipse, styles.ellipse4, styles.ellipse4Tablet)}/>
        <a href="docs/tempo/md-install" className={clsx(styles.item, styles.item1, isVisible ? styles.animate : '')}>
          <div className={clsx(styles.item__wrapper, "flex", "column")}>
            <img src="img/grid_item_1.svg" className={styles.item__img}/>
            <h3 className={styles.item__title}>
              {FeatureList[0].title}
            </h3>
            <p className={styles.item__descr}>
              {FeatureList[0].description}
            </p>
            <div className={clsx(styles.item__link, "flex")}>
              Документация
              <img src="img/features-arrow.svg" className={styles.item__linkItem} />
            </div>
          </div>
        </a>
        <a href="docs/tempo/md-install" className={clsx(styles.item, styles.item2, isVisible ? styles.animate1 : '')}>
          <div className={clsx(styles.item__wrapper, "flex", "column")}>
            <img src="img/grid_item_2.svg" className={styles.item__img}/>
            <h3 className={styles.item__title}>
            {FeatureList[1].title}
            </h3>
            <div className={clsx(styles.item__link, "flex")}>
              Документация
              <img src="img/features-arrow.svg" className={styles.item__linkItem} />
            </div>
          </div>
        </a>
        <a href="/docs/tempo/md-install" className={clsx(styles.item, styles.item3, isVisible ? styles.animate2 : '')}>
          <div className={clsx(styles.item__wrapper, "flex", "column")}>
            <img src="img/grid_item_3.svg" className={styles.item__img}/>
            <h3 className={styles.item__title}>
              {FeatureList[2].title}
            </h3>
            <p className={styles.item__descr}>
              {FeatureList[2].description}
            </p>
            <div className={clsx(styles.item__link, "flex")}>
              Документация
              <img src="img/features-arrow.svg" className={styles.item__linkItem} />
            </div>
          </div>
        </a>
        <a href="/docs/tempo/md-install" className={clsx(styles.item, styles.item__mini, isVisible ? styles.animate3 : '')}>
          <div className={clsx(styles.item__wrapper, "flex", "column")}>
            <img src="img/grid_item_4.svg" className={styles.item__img}/>
            <h3 className={styles.item__title}>
              {FeatureList[3].title}
            </h3>
            <div className={clsx(styles.item__link, "flex")}>
              Документация
              <img src="img/features-arrow.svg" className={styles.item__linkItem} />
            </div>
          </div>
        </a>
        <a href="/docs/tempo/md-install" className={clsx(styles.item, styles.item__mini, isVisible ? styles.animate4 : '')}>
          <div className={clsx(styles.item__wrapper, "flex", "column")}>
            <img src="img/grid_item_5.svg" className={styles.item__img}/>
            <h3 className={styles.item__title}>
              {FeatureList[4].title}
            </h3>
            <div className={clsx(styles.item__link, "flex")}>
              Документация
              <img src="img/features-arrow.svg" className={styles.item__linkItem} />
            </div>
          </div>
        </a>
        <a href="/docs/tempo/md-install" className={clsx(styles.item, styles.item__mini, isVisible ? styles.animate5 : '')}>
          <div className={clsx(styles.item__wrapper, "flex", "column")}>
            <img src="img/grid_item_6.svg" className={styles.item__img}/>
            <h3 className={styles.item__title}>
              {FeatureList[5].title}
            </h3>
            <div className={clsx(styles.item__link, "flex")}>
              Документация
              <img src="img/features-arrow.svg" className={styles.item__linkItem} />
            </div>
          </div>
        </a>
        <a href="/docs/tempo/md-install" className={clsx(styles.item, styles.item__mini, isVisible ? styles.animate6 : '')}>
          <div className={clsx(styles.item__wrapper, "flex", "column")}>
            <img src="img/grid_item_7.svg" className={styles.item__img}/>
            <h3 className={styles.item__title}>
            {FeatureList[6].title}
            </h3>
            <div className={clsx(styles.item__link, "flex")}>
              Документация
              <img src="img/features-arrow.svg" className={styles.item__linkItem} />
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
  </VisibilitySensor>
  );
}
