import React, { useEffect, useState } from 'react';
import {  useSwiper } from 'swiper/react';
import styles from "./CarouselLeftNavigation.module.css";
import {ReactComponent as ArrowLeft} from "../../../assets/ArrowLeft.svg";
function CarouselLeftNavigation() {
    const swiper= useSwiper();
    const[isBeginning, setIsBeginning]= useState(swiper.isBeginning);
    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsBeginning(swiper.isBeginning)
        })
    }, [])
  return (
    <div className={styles.leftNavigation}>
     {!isBeginning && <ArrowLeft onClick={()=>swiper.slidePrev()}/>} 
    </div>
  )
}

export default CarouselLeftNavigation
