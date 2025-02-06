import React from 'react'
import styles from './Pod.module.css'

function Pod() {
  return (
    <>
    <section className={styles.Section}>
        <img src="https://www.apple.com/v/tv-home/o/images/overview/homepod__eam53jjm772a_large_2x.jpg" alt="" />
        <img src="https://www.apple.com/v/tv-home/o/images/overview/room_filling_sound__zagu3551kwyi_large_2x.jpg" alt="" />
    </section>

    <section className={styles.Section}>
        <img src="https://www.apple.com/v/tv-home/o/images/overview/apple_tv_4k__b30wcqp0pdle_large_2x.jpg" alt="" />
        <img src="https://www.apple.com/v/tv-home/o/images/overview/homeapp__cpc1k972xys2_large_2x.jpg" alt="" />
    </section>
    </>
  )
}

export default Pod