import React, { useRef, useState, useEffect } from 'react';
import styles from './Holiday.module.css';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

function Holiday() {
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
      <h2 className={styles.Holiday}>
      <span className={styles.holiday}>Holiday picks.</span> Add more magic to the moment
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
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-holiday-quick-picks-202411?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1730226657180"/>
            <span className={styles.imageText}>Surprise your favorites <br />with these favorites.<br />one of kind</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYY73?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1723236738435"/>
            <span className={styles.imageText}>iPhone 16 Silicone Case with <br />MagSafe-Star Fruit</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-white-202110?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1632925509000"/>
            <span className={styles.imageText}>HomePod mini-White</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWK73?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1716915397369"/>
            <span className={styles.imageText}>Smart Folio for iPad Air 11- <br />inch (M2) -Sage</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUW43?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1712255584961"/>
            <span className={styles.imageText}>Beats Solo 4 - On-Ear Wireless <br />Headphones-Slate Blue</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXL63?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1724186591572"/>
            <span className={styles.imageText}>46mm Plum Sport Loop</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7E4?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1723930332796"/>
            <span className={styles.imageText}>PopSockets Magsafe Grip for <br />iPhone-Opalescent</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MCFN4?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1724013477596"/>
            <span className={styles.imageText}>iPhone 16 Pro Clear Case with <br />MagSafe</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HRXA2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1729650099141"/>
            <span className={styles.imageText}>Ember Mug 2-Blue</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.image}>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-holiday-gift-card-202411?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1729714063515"/>
            <span className={styles.imageText}>Great gifts are in the cards</span>
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

export default Holiday;
