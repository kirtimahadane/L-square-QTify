import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from './Section.module.css'
//import { Filter } from '@mui/icons-material';
import Filters from '../Filters/Filters';

function Section({title, data, type, filterSource}) {
    const[filters, setFilters]= useState([{key:"all", label:"All"}]);
    const [selectedFilterIndex, setSelectedFilterIndex]= useState(0);
    const [carouselToggle, setCarouselToggle]= useState(true);
    useEffect(() => {
        if (filterSource) {
          filterSource().then((response) => {
                 if (response && response.data) {
              const { data } = response;
              setFilters([...filters, ...data]);
            }
          });
        }
      }, []);
    
    // useEffect(()=>{
    //     if(filterSource){
    //         filterSource().then((response)=>{
    //             const {data}= response;
    //             setFilters([...filters, ...data])
    //         })
    //     }
    // },[]);
    const showFilters= filters.length > 1;
    const cardsToRender= data.filter((card)=>
        showFilters && selectedFilterIndex !==0?
            card.genre.key===filters[selectedFilterIndex].key:card       
           )
    const handleToggle=()=>{
        setCarouselToggle((prevState)=>!prevState)
    }
  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 onClick={handleToggle} className={styles.toggleText}>
                {!carouselToggle?"Collapse All":"Show All"}
            </h4>
        </div>
        {showFilters &&(
            <div className={styles.filterWrapper}>
                <Filters
                filters={filters}
                selectedFilterIndex={selectedFilterIndex}
                setSelectedFilterIndex={setSelectedFilterIndex}
                />
            </div>
        )}
        {data.length ===0 ?(
            <CircularProgress/>
        ):(
            <div className={styles.cardsWrappper}>
                {!carouselToggle?(
                    <div className={styles.wrapper}>
                        {cardsToRender.map(ele=><Card data={ele} type={type}/>)}

                    </div>
                ):( <Carousel
                data={cardsToRender}
                renderComponent={(data)=><Card data={data} type={type}/>}
                />)}
            </div>
        )}
    </div>
  )
}

export default Section
