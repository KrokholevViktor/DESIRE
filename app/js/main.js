$(function () {

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close')
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close')
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
    });

    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10,
        
    });

    try {
        var mixer = mixitup('.gallery__inner', {
            load: {
                filter: '.living'
            },
        });
    } catch (error) {
        
    }

    
    


});

    try {
        Fancybox.bind("[data-fancybox]", {
            hideScrollbar: false,
          });
    } catch (error) {
        
    }