"use strict";
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
autoplay: {
    delay: 2750,
    disableOnInteraction: false,
},
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

$(document).ready(function() {
    var mySwiper = document.querySelector('.swiper-container').swiper

    $(".swiper-container").mouseenter(function() {
        mySwiper.autoplay.stop();
    });

    $(".swiper-container").mouseleave(function() {
        mySwiper.autoplay.start();
    });
});