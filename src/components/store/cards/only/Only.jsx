import React, { useRef, useState, useEffect } from 'react';
import { BsEmojiGrin } from "react-icons/bs";
import { LiaCcApplePay } from "react-icons/lia";
import { ImAppleinc } from "react-icons/im";
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import styles from './Only.module.css'

function Only() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Monitor scroll position to enable or disable arrows
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

        // Show left arrow when not at the start
        setCanScrollLeft(scrollLeft > 0);

        // Show right arrow when not at the end
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
      }
    };

    // Add event listener for scroll
    if (sliderRef.current) {
      sliderRef.current.addEventListener('scroll', handleScroll);
    }

    // Clean up event listener
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -250, // Adjust based on image size
        behavior: 'smooth',
      });
    }
  };

  const scrollToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 250, // Adjust based on image size
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <h2 className={styles.Only}>
        <span className={styles.only}>Only at Apple.</span> With you every step of the holiday.
      </h2>

      <div className={styles.imageSliderWrapper}>
        {/* Left Arrow */}
        <div
          className={`${styles.icon} ${styles.leftArrow} ${!canScrollLeft ? styles.hidden : ''}`}
          onClick={scrollToPrev}
        >
          <IoIosArrowDropleftCircle />
        </div>

        {/* Image Slider */}
        <div
          className={styles.imageSlider}
          ref={sliderRef}
        >
          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <span className={styles.imageText}>Get gifts in time for the <br /> holidays with two-hour <br /> delivery, free delivery,<br />or easy pickup.</span>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-delivery-pickup-202411?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1728401800980" />
            </div>
          </div>

            <div className={styles.sectionGroup}>

              <section className={styles.sectionContainer}>

                <div className={styles.leftSection}>
                  <span className={styles.Smile}><ImAppleinc />
                  </span><br />
                  Customize your Mac <br />and create your own <br />style of Apple Watch.
                </div>
                <div className={styles.rightSection}>
                  <span className={styles.Smile}><HiMiniArrowLeftStartOnRectangle />
                  </span><br />

                  Free extended returns <br />between now and <br />1/8/25.
                </div>

              </section>

              <section className={styles.sectionContainer}>

                <div className={styles.rightSection}>
                  <span className={styles.Pay}><LiaCcApplePay /></span><br />
                  Pay in full or pay over <br />time. Your choice.
                </div>
                <div className={styles.leftSection}>
                  <span className={styles.Smile}><BsEmojiGrin /></span><br />
                  Make them yours. <br />Engrave a mix of emoji, names, and numbers <br />for free.
                </div>

              </section>

            </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <span className={styles.imageText}>Find gifts with an Apple <br />Specialist in a store or online.</span>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-specialist-help-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728571564886" />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <span className={styles.imageText}>Get to know your new device with <br />Personal Setup</span>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-personal-setup-202408_GEO_US?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1727714996705" />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <span className={styles.imageText}>Join free sessions at your <br />Apple Store.</span>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145" />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <span className={styles.imageText}>Get expert service and <br />Support at the Genius Bar</span>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-genius-202108?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1626375544000" />
            </div>
          </div>

        </div>

        {/* Right Arrow */}
        <div
          className={`${styles.icon} ${styles.rightArrow} ${!canScrollRight ? styles.hidden : ''}`}
          onClick={scrollToNext}
        >
          <IoIosArrowDroprightCircle />
        </div>
      </div>
    </div>
  );
}

export default Only;

