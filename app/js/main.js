$(function () {

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close')
    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close')
    });

    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open')
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

    $('.article-slider__box').slick({
        dots: false,
        arrows: true,
        prevArrow: `<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="images/arrow-slide-left.svg"></button>`,
        nextArrow: `<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="images/arrow-slide-right.svg"></button>`,
        
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

if($(window).width() < 651) {
    $('.works-path__item--measuring').appendTo($('.works-path__items-box'));
}