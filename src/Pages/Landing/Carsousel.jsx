import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Students from "../../assets/images/students.jpg";
import Students2 from "../../assets/images/students2.jpg";
import { useStyles } from "./landingStyles";

function Carsousel() {
  const styles = useStyles();

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
    >
      <div className={styles.imgDivStyle}>
        <img alt="pic1" src={Students} className={styles.imgStyle} />
      </div>
      <div className={styles.imgDivStyle}>
        <img alt="pic2" src={Students2} className={styles.imgStyle} />
      </div>
      <div className={styles.imgDivStyle}>
        <img alt="pic3" src={Students} className={styles.imgStyle} />
      </div>
    </Carousel>
  );
}

export default Carsousel;
