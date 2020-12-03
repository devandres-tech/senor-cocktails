import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import { useViewport } from '../hooks/useViewport'
import config from '../config.json'

SwiperCore.use([Navigation, Pagination, A11y, Autoplay])

const Slider = ({ items, title, type }) => {
  const [windowDimensions] = useViewport()

  return (
    <div
      className={`sliderContainer ${
        windowDimensions.width < config.TABLET_WIDTH ? '' : ' container'
      }`}
    >
      <div className='sliderContainer__sliderHeader'>
        <h2>{title}</h2>
        <Link
          className='default-linkStyle'
          to={{ pathname: `/drinklist/${type}`, drinks: items, title }}
        >
          See All
        </Link>
      </div>
      <Swiper
        draggable={false}
        speed={500}
        spaceBetween={windowDimensions.width < config.TABLET_WIDTH ? 5 : 10}
        slidesOffsetBefore={
          windowDimensions.width < config.TABLET_WIDTH ? 16 : 0
        }
        slidesOffsetAfter={
          windowDimensions.width < config.TABLET_WIDTH ? 16 : 0
        }
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx} className='sliderContainer__item'>
            <img
              src={item.strDrinkThumb ? item.strDrinkThumb : item.img}
              alt='cocktail'
            />
            <p className='sliderContainer__itemTitle'>
              {item.strDrink ? item.strDrink : item.strIngredient}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
