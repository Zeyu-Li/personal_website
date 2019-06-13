"use strict";

$(".backtotop").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 300), !1;
});
$(".close").click(function(){
    $(".alert").slideUp();
});
$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('.banner').css('background-position', 'left ' + ((scrolledY)) + 'px');
});

$(document).ready(function() {
    $(".alert").slideDown();
});