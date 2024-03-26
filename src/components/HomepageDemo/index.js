import React, {useState} from 'react';
import LazyLoad from 'react-lazy-load';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import clsx from 'clsx';
import styles from './styles.module.sass';

export default function HomepageDemo({ openModal, setModalImageUrl }) {

  const openImage = (e, src) => {
    setModalImageUrl(src);
    openModal();
  };

  return (
    <section className={styles.demo}>
      <LazyLoad height={'auto'} offset={1200}>
        <>
          <img src={'img/ellipse-5.png'} className={clsx(styles.ellipse, styles.ellipse5)}/>
          <img src={'img/ellipse-5-tablet.png'} className={clsx(styles.ellipse, styles.ellipse5, styles.ellipse5Tablet)}/>
          <img src={'img/ellipse-6.png'} className={clsx(styles.ellipse, styles.ellipse6)}/>
          <img src={'img/ellipse-6-tablet.png'} className={clsx(styles.ellipse, styles.ellipse6, styles.ellipse6Tablet)}/>
        </>
      </LazyLoad>
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
            centeredSlides={true}
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
              600: {
                slidesPerView: 1,
                cardsEffect: {
                  perSlideOffset: 1,
                  perSlideRotate: 1,
                }
              },
              601: {
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
                clickable: false,
              }
            }
            modules={[EffectCards, Pagination, Navigation]}
          >
            <SwiperSlide className="swiper__slide">
              <img src={'img/MD/addGroup_toUser.png'} className="demo__img" onClick={(event) => openImage(event, event.target.src)} />
            </SwiperSlide>
            <SwiperSlide className="swiper__slide">
              <img src={'img/MD/changePassword.png'} onClick={(event) => openImage(event, event.target.src)}/>
            </SwiperSlide>
            <SwiperSlide className="swiper__slide">
              <img src={'img/MD/groupProperties.png'} onClick={(event) => openImage(event, event.target.src)}/>
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
