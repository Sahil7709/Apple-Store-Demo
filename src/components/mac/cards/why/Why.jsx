import React from 'react'
import styles from './Why.module.css'

function Why() {
  return (
    <>
    <div className={styles.Why}>Why Apple is the best <br /> place to buy Mac</div>

    <div className={styles.cardSlider}>

        <div className={styles.imageContainer}>
        <img src="https://www.apple.com/v/mac/home/cb/images/overview/incentive/icon_apple_card__fa68csvawtei_large_2x.png" alt="" />
          <span className={styles.imageText}>Pay over time, <br />interest-free.</span>
        </div>

        <div className={styles.imageContainer}>
        <img src="https://www.apple.com/v/mac/home/cb/images/overview/incentive/icon_customize__b6w4i5ax89py_large_2x.png" alt="" />
          <span className={styles.imageText}>Customize your Mac.</span>
        </div>

        <div className={styles.imageContainer}>
        <img src="https://www.apple.com/v/mac/home/cb/images/overview/incentive/icon_delivery__fyzranm9416y_large_2x.png" alt="" />
          <span className={styles.imageText}>Get flexible delivery <br />and easy pickup.</span>
        </div>

        <div className={styles.imageContainer}>
        <img src="https://www.apple.com/v/mac/home/cb/images/overview/incentive/icon_specialist_alt__fht15dmiclei_large_2x.png" alt="" />
          <span className={styles.imageText}>Shop live with<br />a Specialist</span>
        </div>

        <div className={styles.imageContainer}>
        <img src="https://www.apple.com/v/mac/home/cb/images/overview/incentive/icon_person_alt__fl61yzn43o6e_large_2x.png" alt="" />
          <span className={styles.imageText}>Meet your new Mac <br />with Personal Setup.</span>
        </div>

        <div className={styles.imageContainer}>
        <img src="https://www.apple.com/v/mac/home/cb/images/overview/incentive/icon_asa__urbsp7b9ktuq_large_2x.png" alt="" />
          <span className={styles.imageText}>Explore a Shopping <br />experience designed <br />around you. </span>
        </div>

      </div>
    
    </>
  )
}

export default Why