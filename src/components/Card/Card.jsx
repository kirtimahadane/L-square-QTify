import React from 'react'
import styles from "./Card.module.css";
import { Tooltip, Chip } from '@mui/material';
function Card({data, type}) {
    
    const getCard=(type)=>{
      switch(type){
        case "album":{
          const {image, title, songs,slug, follows}= data;
        
        return (
          <Tooltip title={`${songs.length}songs`}placement='top' arrow>
            <a href={`/album/${slug}`}>
              <div className={styles.wrapper}>
                  <div className={styles.card}>
                      <img src={image} alt="album" loading='lazy'/>
                      <div className={styles.banner}>
                          <Chip 
                          label={`${follows} follow`}
                          size="small"
                          className={styles.pill}                          />
                      </div>
                  </div>
                  <div className={styles.titleWrapper}>
                      <p className={styles.title}>{title}</p>
      
                  </div>
              </div>
            </a>
          </Tooltip>
        ); 
        }     
          case "song":{
            const {image, title,  likes}= data;  
          return(
                  <div className={styles.wrapper}>
                  <div className={styles.card}>
                      <img src={image} alt="album" loading='lazy'/>
                      <div className={styles.banner}>
                          <div className={styles.pill}>
                            <p>{likes}Likes</p>
                          </div>
                      </div>
                  </div>
                  <div className={styles.titleWrapper}>
                      <p className={styles.title}>{title}</p>
      
                  </div>
              </div>
          );
            
          }
          default:
          return <></>        
      }
    } 
  return getCard(type)
}

export default Card;
