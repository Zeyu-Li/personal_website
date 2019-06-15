"use strict";

// init var
var bar;
var testNumber;
var active;
var score = 0;

// Starting bounce
function start() {

    // generates range -120px to 50px

    var random = Math.floor(Math.random() * (50 - -120 + 1)) + -120;

    // ball translate
    $(".ball").css("transform", "translate(427px," + random + "px)");

    // AI paddle translate
    if (random - 20 <= -120) {
        $(".AIPaddle").css("transform", "translate(435px," + (-120) + "px)");
    } else if (random - 20 >= 20) {
        $(".AIPaddle").css("transform", "translate(435px," + (25) + "px)");
    } else {
        $(".AIPaddle").css("transform", "translate(435px," + (random - 20) + "px)");
    }
    setTimeout(bounce, 750);

    if (testNumber) {
        return 0;
    }

}

// player bounce
function bounce() {

    $('.ball').css("transition-duration", "1.5s");

    // calculate bounces
    var random = Math.floor(Math.random() * (50 - -120 + 1)) + -120;

    $(".ball").css("transform", "translate(15px," + random + "px)");

    setTimeout(test, 1500, random);
    if (testNumber) {
        return 0;
    }

    return false;

}

// test if paddle is near player paddle
function test(random) {

    if (bar > 185) {
        bar = 185;
    } else if (bar < 40) {
        bar = 40;
    }

    random = random + 140;

    if (((bar - 25) <= random) && ((bar + 25) >= random)) {

        // POINT system
        score++;
        $('.log').text("SCORE: " + score);
        loop();

        // else stop & reset
    } else {
        $('.log').text("SCORE: --");
        $('.button').css("opacity", "100");
        $(".AIPaddle").css("transform", "translate(435px,-55px)");
        $('.ball').css("transition-duration", "0.02s");
        $(".ball").css("transform", "translate(220px, -35px)");
        $(".ball").css("-webkit-transition", "-webkit-transform 0.75s linear");

        score = 0;
        testNumber = 1;
        active = false;

        return 0;
    }


}

// player mouse location
function playerMouse() {

    return event.pageY - $('.init').offset().top;

}

// looping function if player hits the ball
function loop() {

    // generates range -120px to 50px

    var random = Math.floor(Math.random() * (50 - -120 + 1)) + -120;

    $(".ball").css("transform", "translate(427px," + random + "px)");

    if (random - 20 <= -120) {
        $(".AIPaddle").css("transform", "translate(435px," + (-120) + "px)");
    } else if (random - 20 >= 20) {
        $(".AIPaddle").css("transform", "translate(435px," + (25) + "px)");
    } else {
        $(".AIPaddle").css("transform", "translate(435px," + (random - 20) + "px)");
    }
    setTimeout(bounce, 1500);

}

// basically main function call
$(document).ready(function () {

    // -------------------
    // screen size warning
    var windowsize = $(window).width();
    if (windowsize < 360) {

        $('.pongCanvas').hide();
        $('.warning').text("**Your screen size is too small. It must be 440px to play pong. Sorry \n")

    }
    if (windowsize < 360 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.warning').append("If you are on mobile, this pong game might not be the best experience, Sorry :(")
    }

    // screen size warning
    // -------------------

    //    if clicked
    $('.button').click(function () {

        if (active) {
            return 0;
        }

        testNumber = 0;

        $('.button').css("opacity", "0");

        active = true;

        start();

    });

    // user paddle
    $('.backGround2').mouseenter(function () {

        $(".backGround2").on("mousemove touchmove", function (event) {

            // console logs x position 
            //console.log("X: " + (event.pageX - $('.init').offset().left).toString());

            // console logs y position 
            //console.log("Y: " + (225 - playerMouse()));

            // assigns mouse position to var bar
            bar = playerMouse();

            if (playerMouse() >= 40 && playerMouse() <= 185) {

                $('.playerPaddle').css("transform", "translate(6px, " + (playerMouse() - 135 - 25) + "px)");
            }

        });

    });

});