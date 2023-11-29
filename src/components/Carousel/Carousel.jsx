import React, { useEffect } from 'react';
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css' ;
import {  Navigation } from 'swiper';

import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
//import styles from './CarouselLeftNavigation';
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
//import styles from './CarouselRightNavigation';

const Controls=({  data })=>{
    const swiper= useSwiper();
    useEffect(()=>{
        swiper.slideTo(0,1);


    },[data, swiper]);
    return <></>
}
function Carousel({data, renderComponent}) {
  return (
    <div className={styles.wrapper}>
      <Swiper
      style={{padding:"0px 20px"}}
      initialSlide={0}
      modules={[Navigation]}
      slidesPerView={"auto"}
      spaceBetween={40}
      allowTouchMove  
      >
      <Controls data={data} />
      <CarouselLeftNavigation />
      <CarouselRightNavigation />
      {data.map((ele)=>{
         return <SwiperSlide>{renderComponent(ele)}</SwiperSlide> 
      
     
      })}
      </Swiper>
    </div>
  )
}

export default Carousel
