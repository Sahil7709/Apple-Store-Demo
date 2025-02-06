import React from 'react'
import styles from './Lineup.module.css'

function Lineup() {
    return (
        <>
            <div className={styles.Lineup}>Explore the lineup</div>
            <div className={styles.image}>
                <img src="https://www.apple.com/v/iphone/home/bx/images/overview/select/iphone_16pro__erw9alves2qa_large_2x.png" alt="" />
                <img src="https://www.apple.com/v/iphone/home/bx/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" alt="" />
                <img src="https://www.apple.com/v/iphone/home/bx/images/overview/select/iphone_15__buwagff0mwwi_large_2x.png" alt="" />
                <img src="https://www.apple.com/v/iphone/home/bx/images/overview/select/iphone_14__eso1fig4ci6a_large_2x.png" alt="" />
                <img src="https://www.apple.com/v/iphone/home/bx/images/overview/select/iphone_se__cuaa2bdndqeu_large_2x.png" alt="" />
            </div>
        </>

    )
}

export default Lineup