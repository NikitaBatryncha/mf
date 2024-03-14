import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import clsx from 'clsx';
import styles from './styles.module.sass';

export default function HomepageDemo() {
  return (
    <section className={clsx(styles.demo, "demo_src-components-HomepageDemo-styles-module")}>
      <img rel="preload" src={'img/ellipse-5.png'} className={clsx(styles.ellipse, styles.ellipse5)}/>
      <img rel="preload" src={'img/ellipse-5-tablet.png'} className={clsx(styles.ellipse, styles.ellipse5, styles.ellipse5Tablet)}/>
      <img rel="preload" src={'img/ellipse-6.png'} className={clsx(styles.ellipse, styles.ellipse6)}/>
      <img rel="preload" src={'img/ellipse-6-tablet.png'} className={clsx(styles.ellipse, styles.ellipse6, styles.ellipse6Tablet)}/>
      <div className={clsx("container", "column", styles.demo__container)}>
        <h2 className={clsx("title", styles.demo__title)}>
          Примеры интерфейса
        </h2>
        <div className={styles.demo__gradient} />
          <Swiper
            effect={'cards'}
            grabCursor={true}
            slidesPerView={'auto'}
            loop={true}
            initialSlide={2}
            speed={1000}
            cardsEffect={{
              perSlideOffset: 16,
              perSlideRotate: 0,
            }}
            breakpoints={{
              370: {
                slidesPerView: 1,
                cardsEffect: {
                  perSlideOffset: 1,
                  perSlideRotate: 1,
                }
              },
              520: {
                slidesPerView: 1,
                cardsEffect: {
                  perSlideOffset: 1,
                  perSlideRotate: 1,
                }
              },
              521: {
                slidesPerView: 'auto',
                cardsEffect: {
                  perSlideOffset: 9,
                  perSlideRotate: 0,
                }
              },
              1100: {
                slidesPerView: 'auto',
                cardsEffect: {
                  perSlideOffset: 9,
                  perSlideRotate: 0,
                }
              },
              1101: {
                slidesPerView: 'auto',
                cardsEffect: {
                  perSlideOffset: 17,
                  perSlideRotate: 0,
                }
              },
            }}
            className="mySwiper"
            pagination={{el:'.swiper-pagination', clickable: true}}
            navigation = {
              {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true
              }
            }
            modules={[EffectCards, Pagination, Navigation]}
          >
            <SwiperSlide className="swiper__slide">
              <img rel="preload" src={'img/MD/addGroup_toUser.png'} />
            </SwiperSlide>
            <SwiperSlide className="swiper__slide">
              <img rel="preload" src={'img/MD/changePassword.png'} />
            </SwiperSlide>
            <SwiperSlide className="swiper__slide">
              <img rel="preload" src={'img/MD/groupProperties.png'} />
            </SwiperSlide>
            <span className={styles.swiper__descr} id="slideDescr">
              описание слайда
            </span>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </Swiper>
      </div>
    </section>
  );
}
