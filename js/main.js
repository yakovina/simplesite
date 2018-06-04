$(document).ready(function(){
  //  $(".navigation__item").scrollTop(20);
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay:false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000,
        loop: true,
        nav:false,
        animateInClass: true,
        dots: false
    });
  });