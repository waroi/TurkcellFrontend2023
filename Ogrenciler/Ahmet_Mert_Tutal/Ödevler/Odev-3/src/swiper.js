const swiper = new Swiper('.swiper', {
  loop: true,                         //loop
  autoplay: {                         //autoplay
      delay: 2000,  
  },   
  pagination: {                       //pagination(dots)
      el: '.swiper-pagination',
  },
  navigation: {                       //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})



const swip = new Swiper('.bestblogSwiper', {
    loop: true,                         //loop
    effect: "coverflow",                //applying the coverflow effect
    slidesPerView: 3,                   //how many slides to show
    centeredSlides: true,               //centering the first slide
    pagination: {                       //pagination(dots)
        el: '.bb-pagination',
    },
    navigation: {                       //navigation(arrows)
        nextEl: ".bb-next",
        prevEl: ".bb-prev",
    },
})