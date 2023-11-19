import React from 'react';
import styles from './Search.module.css'
import {ReactComponent as SearchIcon} from "../../assets/Search-icon.svg"
function Search({placeholder}) {
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
<input placeholder={placeholder}  required className={styles.search}/>
<button className={styles.searchButton} type="submit">
<SearchIcon/>
</button>

    </form>
      

  )
}

export default Search
