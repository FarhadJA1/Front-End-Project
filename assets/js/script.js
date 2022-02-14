$(function () {
    $(".btn-left").mouseover(function () {
        $(".drop-content-left").removeClass("d-none")
    })
    $(".drop-content-left").mouseleave(function () {
        $(".drop-content-left").addClass("d-none")
    })
    $(".btn-right").mouseover(function () {
        $(".drop-content-right").removeClass("d-none")
    })
    $(".drop-content-right").mouseleave(function () {
        $(".drop-content-right").addClass("d-none")
    })
    $("#home-btn").mouseover(function () {
        $(".home-nav").addClass("visible")

    })
    $(".home-nav").mouseleave(function () {
        $(".home-nav").removeClass("visible")
    })
    $("#shop-btn").mouseover(function () {
        $(".shop-nav").addClass("visible")

    })
    $(".shop-nav").mouseleave(function () {
        $(".shop-nav").removeClass("visible")
    })
    const nextIcon = '<i class="fas fa-arrow-right"></i>';
    const prevIcon = '<i class="fas fa-arrow-left"></i>';
    $('.advert-top').owlCarousel({
        
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        margin:0,
        stagePadding:0,
        smartSpeed:450,
        animateIn:true,
        animateOut:true,
        navText:[prevIcon,nextIcon],
        loop:true,
         dots:false,
         nav:true
    });
    var clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
          stop: function() {
            $('.message').html('The clock has stopped!')
          }
        }
    });
    clock.setTime(220880);
    clock.setCountdown(true);
    clock.start();
    
















})