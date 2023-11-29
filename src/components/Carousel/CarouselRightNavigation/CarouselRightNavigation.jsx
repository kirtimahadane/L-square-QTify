import React, { useEffect, useState } from 'react';
import styles from "./CarouselRightnavitaion.module.css";
import {  useSwiper } from 'swiper/react';

import {ReactComponent as ArrowRight} from "../../../assets/ArrowRight.svg";

function CarouselRightNavigation() {
    const swiper= useSwiper();
    const[isEnd, setIsEnd]= useState(swiper.isEnd);
    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd)
        })
    }, [])
  return (
    <div className={styles.rightNavigation}>
     {!isEnd && <ArrowRight onClick={()=>swiper.slideNext()} />} 
    </div>  )
}

export default CarouselRightNavigation
