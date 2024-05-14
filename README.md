# React + Vite

Slider with React, vite and Swiper.

- install Swiper dependence ( also can use CDN ) -
``` pnpm install swipe ```

- import swiper ( whitout modules, core version ) -
``` import Swiper from 'swiper'```

- import swiper ( with all modules ) -
``` import Swiper from 'swiper/bundle' ```

- initialize Swiper
const swiper = new Swiper( '#nameOfTheClass' , {
    #optionalparameters like 
    direction: 'vertical' | 'horizontal'
    [examples: loop(boolean), speed(ms), spaceBetween(px)](https://swiperjs.com/swiper-api#parameters)

    [moduleConfiguration:{}](https://swiperjs.com/swiper-api#modules)
    pagination:{
        
    }
}
)

- [Documentation of Swiper:](https://swiperjs.com/get-started)