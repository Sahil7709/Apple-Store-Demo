import React from 'react'
import styles from './Trade.module.css'

function Trade() {
  return (
    <>

      <div className={styles.Trade}>Apple Trade In</div>
      <div className={styles.body}>

        <div className={styles.imageContainer}>
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/easy-card-tradein-202303?wid=1028&hei=1388&fmt=png-alpha&.v=1679589166808" alt="" />
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/privacy-card-tradein-202303?wid=1028&hei=1388&fmt=png-alpha&.v=1679589167316" alt="" />
        </div>
      </div>

    </>
  )
}

export default Trade