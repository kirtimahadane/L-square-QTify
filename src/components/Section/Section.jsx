import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from './Section.module.css'

function Section({title, data, type}) {
    const [carouselToggole, setCarouselToggle]= useState(true);
    const handleToggle=()=>{
        setCarouselToggle((prevState)=>!prevState)
    }
  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 onClick={handleToggle} className={styles.toggleText}>
                {!carouselToggole?"Collapse All":"Show All"}
            </h4>
        </div>
        {data.length ===0 ?(
            <CircularProgress/>
        ):(
            <div className={styles.cardsWrappper}>
                {!carouselToggole?(
                    <div className={styles.wrapper}>
                        {data.map(ele=><Card data={ele} type={type}/>)}

                    </div>
                ):( <Carousel
                data={data}
                renderComponent={(data)=><Card data={data} type={type}/>}
                />)}
            </div>
        )}
    </div>
  )
}

export default Section
