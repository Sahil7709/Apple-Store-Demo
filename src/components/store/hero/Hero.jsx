import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import styles from './Hero.module.css';

function Hero() {
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
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth-1);
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
      <span className={styles.Span}></span>
      <h1 className={styles.Hero}>
        <span className={styles.hero}>Store.</span> Gift magic this holiday.
      </h1>
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
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202410?wid=400&hei=260&fmt=png-alpha&.v=1728342368663"
              alt="Mac"
            />
            <p><li><Link to="/mac">Mac</Link></li></p>
          </div>

          <div className={styles.image}>
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202409_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1723857157128"
              alt="iPhone"
            />
            <p><li><Link to="/iphone">iPhone</Link></li></p>
          </div>

          <div className={styles.image}>
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875"
              alt="iPad"
            />
            <p><li><Link to="/ipad">iPad</Link></li></p>
          </div>

          <div className={styles.image}>
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838"
              alt="Apple Watch"
            />
            <p><li><Link to="/watch">Watch</Link></li></p>
          </div>

          <div className={styles.image}>
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=1702403595269"
              alt="Apple Vision Pro"
            />
            <p><li><Link to="/vision">Apple Vision Pro</Link></li></p>
          </div>

          <div className={styles.image}>
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822"
              alt="AirPods"
            />
            <p><li><Link to="/airpods">AirPods</Link></li></p>
          </div>

          <div className={styles.image}>
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000"
              alt="AirTag"
            />
            <p><li><Link to="/accessories">AirTag</Link></li></p>
          </div>

          <div className={styles.image}>
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1681968220649"
              alt="Apple TV"
            />
            <p><li><Link to="/entertainment">Apple TV 4K</Link></li></p>
          </div>
          <div className={styles.image}>
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654"
              alt="Apple TV"
            />
            <p><li><Link to="/entertainment">Home Pod</Link></li></p>
          </div>
          <div className={styles.image}>
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174"
              alt="Apple TV"
            />
            <p><li><Link to="/accessories">Accessories</Link></li></p>
          </div>
          <div className={styles.image}>
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054"
              alt="Apple TV"
            />
            <p>Apple Gift Card</p>
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

export default Hero;
