// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle"
import './Swiper.css'

// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      enabled: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled: false,
    },
  });

export function ShowSlider() {
  return (
    <>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="https://cdn.pixabay.com/photo/2022/04/06/23/50/flower-7116555_1280.jpg" alt="" /></div>
          <div class="swiper-slide"><img src="https://cdn.pixabay.com/photo/2022/12/01/13/28/leaf-7629114_1280.jpg" alt="" /></div>
          <div class="swiper-slide"><img src="https://cdn.pixabay.com/photo/2017/08/06/20/19/orange-2595941_1280.jpg" alt="" /></div>
        </div>
        
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
      </div>
    </>
  );
}
