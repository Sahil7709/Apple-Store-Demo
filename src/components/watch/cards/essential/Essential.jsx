import React from 'react'
import styles from './Essential.module.css'

function Essential() {
  return (
    <>
    <div className={styles.Essential}>Watch essentials.</div>

    <div className={styles.image}>
    <img src="https://www.apple.com/v/watch/bo/images/overview/essentials/banner_bands__fa2yj1435ia2_large_2x.jpg" alt="" />
    <img src="https://www.apple.com/v/watch/bo/images/overview/essentials/banner_airpods__bobqeod4vk1y_large_2x.jpg" alt="" />
    </div>

    </>
  )
}

export default Essential