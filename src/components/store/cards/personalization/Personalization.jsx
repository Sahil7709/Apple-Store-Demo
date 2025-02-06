import React, { useRef, useState, useEffect } from 'react';
import styles from './Personalization.module.css';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

function Personalization() {
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
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      handleScroll(); // Call once to set initial state
    }

    // Cleanup the event listener
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
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
      <h2 className={styles.Personal}>
        <span className={styles.personal}>Personalization.</span> Just for them, just from you.
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
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-holiday-engraving-202411?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1728511605616" />
              <span className={styles.imageText}>Make this Gift <br />one of kind</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-purple?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724927451266" />
              <span className={styles.imageText}>AirPods Max -Purple</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724041669458" />
              <span className={styles.imageText}>AirPods Pro 2</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1725502639798" />
              <span className={styles.imageText}>AirPods 4 with Active Noise <br />Cancellation</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1713841707336" />
              <span className={styles.imageText}>Apple Pencil Pro</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1617761671000" />
              <span className={styles.imageText}>AirTag</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-select-202409?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1723685836351" />
              <span className={styles.imageText}>AirPods 4</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU8F2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1540596407165" />
              <span className={styles.imageText}>Apple Pencil(2nd generation)</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-4pack-select-202104?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1617761669000" />
              <span className={styles.imageText}>AirTag 4 pack</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2H3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1634663497000" />
              <span className={styles.imageText}>Air Beats-fit Pro</span>
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

export default Personalization;
