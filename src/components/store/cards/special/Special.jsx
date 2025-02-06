import React, { useRef, useState, useEffect } from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import styles from './Special.module.css'

function Special() {
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
      <h2 className={styles.Special}>
        <span className={styles.special}>Special Stores.</span> iPhone carrier deals and exclusive savings for school, businesses, and more.
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
              <span className={styles.imageText}>Apple. Your one-stop shop<br />for incredible carrier deals.</span>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-carriertrade-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1725466294938" />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <span className={styles.imageText}>Buy a new Mac or iPad with<br />education savings.</span>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202406?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1716334899885" />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <span className={styles.imageText}>From enterprise to small<br />business</span>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-business-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1724096343921" />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <span className={styles.imageText}>Special pricing is available<br />for state,local,and federal agencies.</span>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259305816" />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <span className={styles.imageText}>Active and veteran <br />members may be eligible <br />for exclusive savings.</span>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veteran-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1723659938034" />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <span className={styles.imageText}>Shop refurbished Apple<br />products backed by a <br />one-year warranty</span>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-refurb-202408?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1721055057263" />
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

export default Special;

