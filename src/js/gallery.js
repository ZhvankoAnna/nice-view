 // core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination, EffectCoverflow
 } from 'swiper';
 

const swiper = new Swiper('.mySwiper', {
   // configure Swiper to use modules
   modules: [Navigation, Pagination, EffectCoverflow
   ],
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  slideToClickedSlide: true,
 

  speed: 800,

  effect: 'coverflow',
  coverflowEffect: {
    rotate:15,
    stretch:32,
    scale: 0.6,
    slideShadows: false,
  },

  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


