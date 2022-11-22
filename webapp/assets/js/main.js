$(document).ready(function () {
    
    $(window).scroll(function () {
        if($(this).scrollTop()) {
            $('header').addClass('sticky');
            $('.nav').addClass('sticky');

            $('#back-top').fadeIn();
        } else {
            $('header').removeClass('sticky');
            $('.nav').removeClass('sticky');

            $('#back-top').fadeOut();
        }
    }) 

    // headerfix
    var autoload = setInterval( function() {
        $('#btn-next').trigger('click');
    }, 5000);

    // btn-next
    $('#btn-next').click(function (e) { 
        clearInterval(autoload);
        var slide_next = $('.active').next();
        var index = $('.active-btn').index()+1;
        if(slide_next.length!=0) {
            $('.active').addClass('prev_left').one('webkitAnimationEnd', function (e) {
                $('.prev_left').removeClass('prev_left').removeClass('active');
            });
            slide_next.addClass('active').addClass('next_right').one('webkitAnimationEnd', function (e) {
                $('.next_right').removeClass('next_right');
            });

            $('.carousel__btn ul li').removeClass('active-btn');
            $('.carousel__btn ul li:nth-child('+(index+1)+')').addClass('active-btn');

        } else {
            $('.active').addClass('prev_left').one('webkitAnimationEnd', function (e) {
                $('.prev_left').removeClass('prev_left').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('next_right').one('webkitAnimationEnd', function (e) {
                $('.next_right').removeClass('next_right');
            });

            $('.carousel__btn ul li').removeClass('active-btn');
            $('.carousel__btn ul li:nth-child(1)').addClass('active-btn');
        }
    });

    // btn-prev
    $('#btn-prev').click(function (e) { 
        clearInterval(autoload);
        var slide_prev = $('.active').prev();
        var index = $('.active-btn').index()+1;
        if(slide_prev.length!=0) {

            $('.active').addClass('prev_right').one('webkitAnimationEnd', function (e) {
                $('.prev_right').removeClass('prev_right').removeClass('active');
            });
            slide_prev.addClass('active').addClass('next_left').one('webkitAnimationEnd', function (e) {
                $('.next_left').removeClass('next_left');
            });

            $('.carousel__btn ul li').removeClass('active-btn');
            $('.carousel__btn ul li:nth-child('+(index - 1)+')').addClass('active-btn');
        } else {
            $('.active').addClass('prev_right').one('webkitAnimationEnd', function (e) {
                $('.prev_right').removeClass('prev_right').removeClass('active');
            });
            $('.slide:last-child').addClass('active').addClass('next_left').one('webkitAnimationEnd', function (e) {
                $('.next_left').removeClass('next_left');
            });
            $('.carousel__btn ul li').removeClass('active-btn');
            $('.carousel__btn ul li:last-child').addClass('active-btn');
        }
    });

    $('.carousel__btn ul li').click(function (e) { 
        clearInterval(autoload);
        var index = $('.active-btn').index()+1;
        var index_click = $(this).index()+1;

        $('.carousel__btn ul li').removeClass('active-btn');
        $(this).addClass('active-btn');

        if(index_click<index) {
            $('.active').addClass('prev_right').one('webkitAnimationEnd', function (e) {
                $('.prev_right').removeClass('prev_right').removeClass('active');
            });
            $('.slide:nth-child('+index_click+')').addClass('active').addClass('next_left').one('webkitAnimationEnd', function (e) {
                $('.next_left').removeClass('next_left');
            });
        } else {
            if(index_click>index) {
            $('.active').addClass('prev_left').one('webkitAnimationEnd', function (e) {
                $('.prev_left').removeClass('prev_left').removeClass('active');
            });
            $('.slide:nth-child('+index_click+')').addClass('active').addClass('next_right').one('webkitAnimationEnd', function (e) {
                $('.next_right').removeClass('next_right');
            });
            }
        }
    });

    // back-top
    $('#back-top').click(function (e) { 
        $('html, body').animate({
            scrollTop:0
        }, 500)
    });

    $('.section__menu ul.menu-list li:nth-child(1) a').click(function (e) { 
        e.preventDefault();

        $('html, body').animate({ scrollTop: $('.product-1').offset().top-120},500);
    });

    $('.section__menu ul.menu-list li:nth-child(2) a').click(function (e) { 
        e.preventDefault();

        $('html, body').animate({ scrollTop: $('.product-2').offset().top-120},500);
    });

    $('.section__menu ul.menu-list li:nth-child(3) a').click(function (e) { 
        e.preventDefault();

        $('html, body').animate({ scrollTop: $('.product-3').offset().top-120},500);
    });
    $('.section__menu ul.menu-list li:nth-child(4) a').click(function (e) { 
        e.preventDefault();

        $('html, body').animate({ scrollTop: $('.product-4').offset().top-120},500);
    });
});
