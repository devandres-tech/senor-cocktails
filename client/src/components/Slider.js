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

const Slider = ({ items, title }) => {
  const [windowDimensions] = useViewport()

  return (
    <div className='sliderContainer container'>
      <div className='sliderContainer__sliderHeader'>
        <h2>{title}</h2>
        <Link className='default-linkStyle'>See All</Link>
      </div>
      <Swiper
        draggable={false}
        speed={200}
        spaceBetween={windowDimensions.width < config.MOBILE_WIDTH ? 10 : 0}
        slidesOffsetBefore={
          windowDimensions.width < config.MOBILE_WIDTH ? 16 : 0
        }
        pagination={{ clickable: true }}
        navigation={windowDimensions.width < config.MOBILE_WIDTH ? false : true}
        loop={windowDimensions.width < config.MOBILE_WIDTH ? false : true}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          650: {
            slidesPerView: 3,
          },
          998: {
            slidesPerView: 4,
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
