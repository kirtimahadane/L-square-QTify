import React from 'react';
import LogoImage  from  "../../assets/logo.svg";
import styles from "./Logo.module.css";
const Logo=()=>{
    return(
        <img src={LogoImage} width={67} alt="logo" className={styles.logo}/>
    )
}
export default Logo;