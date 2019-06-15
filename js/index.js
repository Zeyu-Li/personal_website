"use strict";

$(".backtotop").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 300), !1;
});
$(".close").click(function(){
    $(".alert").slideUp();
});
$(".expand").click(function () {
    $(".hidden").slideToggle()
})
$(document).ready(function() {
    $(".alert").slideDown();
});