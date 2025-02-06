import React from 'react'
import styles from './Essential.module.css'

function Essential() {
  return (
    <>
      <div className={styles.Essential}>Mac essentials.</div>

      <div className={styles.body}>

        <section className={styles.imageContainer}>
          <h2>Mac accessories</h2>
            <img src="https://www.apple.com/v/mac/home/cb/images/overview/essentials/essentials_accessories__dglhsic54owi_large_2x.jpg" alt="" />
        </section>
        
        <section className={styles.imageContainer}>
          <h2>Studio Display</h2>
            <img src="https://www.apple.com/v/mac/home/cb/images/overview/essentials/essentials_display__bk3i351qm0c2_large_2x.jpg" alt="" />
        </section>

      </div>

    </>
  )
}

export default Essential