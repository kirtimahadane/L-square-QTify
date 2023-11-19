import React from 'react'
import styles from "./Hero.module.css";
import HeroImage from "../../assets/vibrating-headphone 1.png"
function Hero() {
  return (
    <div className={styles.bg}>
      <div className={styles.text}>
        <p>100 Thousand Songs, ad-free </p>
        <p>Over thousands podcast episodes</p>
      </div>
      <div className={styles.image}>
        <img src={HeroImage} alt="heroImage"/>
      </div>
    </div>
  )
}

export default Hero
