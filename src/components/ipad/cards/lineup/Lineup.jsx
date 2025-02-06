import React from 'react'
import styles from './Lineup.module.css'

function Lineup() {
    return (
        <>
            <div className={styles.Lineup}>Explore the lineup</div>
            <div className={styles.image}>
                <img src="https://www.apple.com/v/ipad/home/cm/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_small_2x.png" alt="" />
                <img src="https://www.apple.com/v/ipad/home/cm/images/overview/select/product-tile/pt_ipad_air__cr381zljqdiu_small_2x.png" alt="" />
                <img src="https://www.apple.com/v/ipad/home/cm/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_small_2x.png" alt="" />
                <img src="https://www.apple.com/v/ipad/home/cm/images/overview/select/product-tile/pt_ipad_mini__f3iy3qb50gia_small_2x.png" alt="" />
            </div>
        </>

    )
}

export default Lineup