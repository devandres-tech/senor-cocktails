import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import PropTypes from 'prop-types'

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
        <Link className='default-linkStyle'>See All</Link>
      </div>
      <Swiper
        lazy={{
          loadPrevNext: true,
        }}
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
            <Link
              to={
                type === 'drink'
                  ? `/drink/${item._id}`
                  : `/ingredient/${item._id}`
              }
            >
              <img src={item.image} alt='cocktail' />
              <p className='sliderContainer__itemTitle'>{item.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider

Slider.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string,
}
