const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 60,
  slidesPerGroup: 5,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 3,
      // spaceBetween: 60,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },

    // when window width is >= 640px
    1400: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
