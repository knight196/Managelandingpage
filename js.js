//Navbar
const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () =>{
    ul.classList.toggle('show');
});

//Slider
var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    freeMode:false,
    centeredSlides: false,
    lazy:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //responsive design for mobile and desktop
  breakpoints:{
    0:{
      slidesPerView:1,
      spaceBetween:30,
    },
    988:{
      slidesPerView:3,
      spaceBetween:40,
    }
  }
  })