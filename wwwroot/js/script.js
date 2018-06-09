(function($) {
    "use strict";

    // Windows load

    $(window).on("load", function() {

        // Site loader 

        $(".loader-inner").fadeOut();
        $(".loader").delay(200).fadeOut("slow");

    });


    // Site navigation setup

    var header = $('.header'),
        pos = header.offset();

    $(window).scroll(function() {
        if ($(this).scrollTop() > pos.top + 500 && header.hasClass('default')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('default').addClass('switched-header').fadeIn(200);
            });
        } else if ($(this).scrollTop() <= pos.top + 500 && header.hasClass('switched-header')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('switched-header').addClass('default').fadeIn(100);
            });
        }
    });



    // Scroll to

    $('a.scroll').smoothScroll({
        speed: 800,
        offset: -60
    });


    // Mobile menu

    var mobileBtn = $('.mobile-but');
    var nav = $('.main-nav ul');
    var navHeight = nav.height();

    $(mobileBtn).on("click", function() {

        $(".toggle-mobile-but").toggleClass("active");
        nav.slideToggle();
        $('.main-nav li a').addClass('mobile');
        return false;


    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 320 && nav.is(':hidden')) {
            nav.removeAttr('style');
            $('.main-nav li a').removeClass('mobile');
        }

    });

    $('.main-nav li a').click(function() {
        if ($(this).hasClass('mobile')) {
            nav.slideToggle();
            $(".toggle-mobile-but").toggleClass("active");
        }

    });



    // Append images as css background

    for (var i = 0; i < $('.background-img').length; i++) {

        var path = $('.background-img').eq(i).children('img').attr('src');
        $('.background-img').eq(i).css('background', 'url("' + path + '")');
        $('.background-img').eq(i).children('img').hide();
        $('.background-img').eq(i).css('background-position', 'initial');

    }


    // Count down setup

    $('.countdown').countdown('2017/6/10', function(event) {
        $(this).html(event.strftime('%D days %H:%M:%S'));
    });


    // Images zoom setup

    $('.venobox').venobox({
        titleattr: 'data-title',
        numeratio: true
    });

})(jQuery);