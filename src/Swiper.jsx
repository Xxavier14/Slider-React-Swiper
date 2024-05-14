// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";
import "./Swiper.css";

// init Swiper:
const swiper = new Swiper(".swiper-hero", {
  // Optional parameters
  direction: "horizontal",
  autoplay: {
    delay:1000,
    disableOnInteraction:false,
  },
  speed:1000,

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swipergreen = new Swiper(".swiper-green", {
  // Optional parameters
  direction: "vertical",
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,  // Ensure autoplay continues after interaction
  },
  speed: 1000,
});

const swiperbottom1 = new Swiper(".swiper-blue", {
  // Optional parameters
  direction: "vertical",
  autoplay: {
    delay: 1800,
    disableOnInteraction: false,  // Ensure autoplay continues after interaction
  },
  speed: 1000,
});

const swiperbottom2 = new Swiper(".swiper-pink", {
  // Optional parameters
  direction: "vertical",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,  // Ensure autoplay continues after interaction
  },
  speed: 1000,
});

export function ShowSlider() {
  return (
    <>
      <div className="swiper swiper-hero">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="https://cdn.pixabay.com/photo/2022/04/06/23/50/flower-7116555_1280.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://cdn.pixabay.com/photo/2022/12/01/13/28/leaf-7629114_1280.jpg"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/06/20/19/orange-2595941_1280.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="swiper-scrollbar"></div>
      </div>

      <div className="containerSwipers">
        <div className="swiper swiper-green">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://cdn.pixabay.com/photo/2024/01/14/12/30/baseball-8507868_1280.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://cdn.pixabay.com/photo/2023/06/22/07/13/soil-8080788_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="swiper swiper-blue">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://cdn.pixabay.com/photo/2023/08/21/03/34/droplets-8203505_1280.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://cdn.pixabay.com/photo/2022/01/29/09/01/bird-6976834_960_720.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://cdn.pixabay.com/photo/2022/07/23/16/06/jellyfish-7340188_960_720.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="swiper swiper-pink">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_960_720.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://cdn.pixabay.com/photo/2023/04/06/07/45/rose-7903170_960_720.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://cdn.pixabay.com/photo/2022/01/26/03/45/flowers-6967755_960_720.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
