import React from 'react';
import styles from './spinner.module.css'
// First way to import
import { BounceLoader } from 'react-spinners';



function Spinner() {
  return(
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <BounceLoader
          sizeUnit={"px"}
          size={70}
          color={'#123abc'}
          loading={true}
        />
      </div>
    </div>
  )
}

export default Spinner