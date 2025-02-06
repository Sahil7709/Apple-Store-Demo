import React from 'react'
import styles from './Lineup.module.css'

function Lineup() {
    return (
        <>
            <div className={styles.Lineup}>Explore the lineup</div>
            <div className={styles.body}>

                <div className={styles.imageContainer}>
                    <img src="https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large_2x.png" alt="" />
                    <img src="https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large_2x.png" alt="" />
                </div>
            </div>
        </>

    )
}

export default Lineup