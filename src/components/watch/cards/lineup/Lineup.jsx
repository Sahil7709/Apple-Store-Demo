import React from 'react'
import styles from './Lineup.module.css'

function Lineup() {
    return (
        <>
            <div className={styles.Lineup}>Explore the lineup</div>
            <div className={styles.image}>
                <img src="https://www.apple.com/v/watch/bo/images/overview/select/product_se__frx4hb13romm_large_2x.png" alt="" />
                <img src="https://www.apple.com/v/watch/bo/images/overview/select/product_s10__deak4mdempoy_large_2x.png" alt="" />
                <img src="https://www.apple.com/v/watch/bo/images/overview/select/product_u2__ebztafh9rvau_large_2x.png" alt="" />

            </div>
        </>

    )
}

export default Lineup