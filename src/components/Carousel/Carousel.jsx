import { useEffect, useState } from "react";
import "./carousel.css";

const IMAGES = [
  "https://bold-approval-c005df0fb8.media.strapiapp.com/small_i1_f480602757.webp",
  "https://bold-approval-c005df0fb8.media.strapiapp.com/small_Tower_1200x628_b6d061292b.jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interValId = setInterval(handleNextSlide, 5000);

    return () => {
      clearInterval(interValId);
    };
  }, [currentIndex]);

  const handleNextSlide = () => {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % IMAGES.length);
  };

  const handlePreviousSlide = () => {
    setCurrentIndex((previousIndex) => {
      return previousIndex === 0 ? IMAGES.length - 1 : previousIndex - 1;
    });
  };

  return (
    <div className="">
      <div className="carousel-container">
        <div className="carousel-image-container">
          {IMAGES.map((img, idx) => {
            return (
              <img
                key={idx}
                src={img}
                alt={`slide-img-${idx}`}
                className={
                  currentIndex === idx ? "fullImage active" : "fullImage"
                }
              />
            );
          })}

          {/* <img
            // IMAGES[currentIndex]
            // so that only particular Image will be shown in our DOm not all image will reder
            // But in this each Time Image Will Be Shown in Network
            alt={`slide-img-${currentIndex}`}
            className="fullImage active"
            src={IMAGES[currentIndex]}
          /> */}
        </div>

        <div className="carousel-btn-container">
          <button onClick={handlePreviousSlide}>-</button>
          <button onClick={handleNextSlide}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
