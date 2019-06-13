"use strict";
var swiper = new Swiper('.swiper-container', {
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

$(".backtotop").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 300), !1;
});
$(".close").click(function(){
    $(".alert").slideUp();
});

$(document).ready(function() {
    $(".alert").slideDown();
    var mySwiper = document.querySelector('.swiper-container').swiper

    $(".swiper-container").mouseenter(function() {
        mySwiper.autoplay.stop();
    });

    $(".swiper-container").mouseleave(function() {
        mySwiper.autoplay.start();
    });
});