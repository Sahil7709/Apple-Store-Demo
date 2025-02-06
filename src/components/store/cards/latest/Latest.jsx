import React, { useRef, useState, useEffect } from 'react';
import styles from './Latest.module.css';
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

function Latest() {
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
      <h2 className={styles.Latest}>
        <span className={styles.latest}>The latest. </span>Take a look at what's new, right now.
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
          <div className={styles.image}>
            <div className={styles.imageText}><li><Link to="/iphone">iPhone16 Pro</Link></li></div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-pro-202411_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729180965302" alt="iPhone16 Pro" />
          </div>

          <div className={styles.image}>
            <div className={styles.imageText}><li><Link to="/watch">Apple Watch Series 10</Link></li></div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-s10-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729694064591" alt="Apple Watch Series 10" />
          </div>

          <div className={styles.image}>
            <div className={styles.imageText}><li><Link to="/ipad">iPad Mini</Link></li></div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-mini-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728504973912" alt="iPad Mini" />
          </div>

          <div className={styles.image}>
            <div className={styles.imageText}><li><Link to="/mac">MacBook Pro</Link></li></div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728492746398" alt="MacBook Pro" />
          </div>

          <div className={styles.image}>
            <div className={styles.imageText}><li><Link to="/iphone">iPhone 16</Link></li></div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-202411_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729180987357" alt="iPhone16" />
          </div>

          <div className={styles.image}>
            <div className={styles.imageText}><li><Link to="/watch">Apple Watch Ultra 2</Link></li></div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729694064643" alt="Apple Watch Ultra 2" />
          </div>

          <div className={styles.image}>
            <div className={styles.imageText}><li><Link to="/ipad">iPad Air</Link></li></div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-air-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728492746150" alt="iPad Air" />
          </div>

          <div className={styles.image}>
            <div className={styles.imageText}><li><Link to="/mac">iMac</Link></li></div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-imac-202411?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1728499365434" alt="iMac" />
          </div>

          <div className={styles.image}>
            <div className={styles.imageText}><li><Link to="/mac">MacBook Air</Link></li></div>
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-air-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729180987244" alt="MacBook Air" />
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

export default Latest;
