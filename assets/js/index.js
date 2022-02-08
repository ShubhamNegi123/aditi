$(function(){

    $('.home').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:3500,
        autoplayHoverPause:false,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('#login').click(function(){
        $('.login-form').slideToggle();
    });



});