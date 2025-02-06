import React, { useRef, useState, useEffect } from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import styles from './Experience.module.css'

function Experience() {
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
      <h2 className={styles.Experience}>
        <span className={styles.experience}>The Apple Experience.</span> Even more awe in store.
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
            <span className={styles.imageText}>Get 3 months of<br />Apple Music free</span>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-apple-music-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728401815327" />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <span className={styles.imageText}>Get 3 months free when you buy<br />an Apple device. ++</span>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-apple-tv-202411?wid=960&hei=1000&fmt=png-alpha&.v=1728401815327" />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <span className={styles.imageText}>Six Apple services.<br />One easy subscription.</span>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375546000" />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <span className={styles.imageText}>New features for writing, focus,<br />communication, and more. ^^</span>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-apple-intelligence-202410_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729187913412" />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <span className={styles.imageText}>We've got you covered.</span>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applecare-202405?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1713313285056" />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <span className={styles.imageText}>See how one app can <br />control your entire home</span>
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-homekit-202405_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1715960298510" />
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

export default Experience;

