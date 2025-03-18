import zenden from '../assets/zenden.jpg';
import freefirst from '../assets/firstclass.png';
import schedule from '../assets/schedule.png';
import React, {useState, useEffect} from 'react';
import '../page-styles/slides.css';
function SlideShow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    const timer = setTimeout(() => {
      setSlideIndex((prevSlideIndex) => {
        return prevSlideIndex + 1 >= slides.length ? 0 : prevSlideIndex + 1;
      });
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshowLayout">
        <div className="slideshowContainer">
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src={zenden} style={{ width: "100%" }} />
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src={freefirst} style={{ width: "100%" }} />
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src={schedule} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
