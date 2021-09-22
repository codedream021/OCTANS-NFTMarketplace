export const paramsWithMaxAndMin = (max: number, min: number) => {
  return {
    slidesPerView: max,
    loop: true,
    observer: true,
    observeParents: true,
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    shouldSwiperUpdate: true,
    rebuildOnUpdate: true,
    spaceBetween: 15,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1024: {
        slidesPerView: max,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: min,
      },
      220: {
        slidesPerView: 1,
      },
    },
  };
};
