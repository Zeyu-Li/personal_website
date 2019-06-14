"use strict";

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
});