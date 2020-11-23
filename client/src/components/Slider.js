import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import drinks from '../data/drinks'

SwiperCore.use([Navigation, Pagination, A11y])

const Slider = ({ items }) => {
  return (
    <Swiper
      className='sliderContainer'
      draggable={false}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item) => (
        <SwiperSlide className='sliderContainer__item'>
          <img src={item.strDrinkThumb} alt='cocktail' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
