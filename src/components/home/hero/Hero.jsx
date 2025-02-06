import React from 'react'
import styles from "./Hero.module.css"
import { MdArrowForwardIos } from "react-icons/md";


function Hero() {
  return (
    <div className={styles.hero}>

      <img src="https://www.apple.com/v/macbook-pro/am/images/overview/welcome/hero_apple_intelligence_headline__d3q0g47xl682_large_2x.png" alt="" />

      <video autoPlay muted width="100%">
      <source src="https://www.apple.com/105/media/us/macbook-pro/2024/00a46e4c-adb6-4301-aa38-917d219bff07/anim/welcome-hero/large.mp4"/>
      </video>
    </div>
  )
}

export default Hero