import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <>
    <div className={styles.Hero}>
      <img src="https://www.apple.com/v/tv-home/o/images/overview/hero__dbphk49ymi2q_large_2x.jpg" alt="" />
    </div>
    <h1 className={styles.h1}>The future hits home.</h1>

    <div className={styles.info}>
    Simply connect your favorite devices and transform your house into a remarkably smart, <br />convenient, and entertaining home. Elevate movie night with theater-like picture and sound. <br />Play any song, in any room, from anywhere. And control lights, locks, and thermostats using <br />Siri. All with the security and privacy of Apple.
    </div>
    </>
  )
}

export default Hero