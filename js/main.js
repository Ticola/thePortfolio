(function ($) {

    "use strict";

    var cfg = {
        scrollDuration: 800,
    },

        $WIN = $(window);

    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    /* Menu on Scrolldown
     * ------------------------------------------------------ */
    var clMenuOnScrolldown = function () {

        var menuTrigger = $('.header-menu-toggle');

        $WIN.on('scroll', function () {

            if ($WIN.scrollTop() > 300) {
                menuTrigger.addClass('opaque');
            }
            else {
                menuTrigger.removeClass('opaque');
            }

        });
    };

    /* OffCanvas Menu
     * ------------------------------------------------------ */
    var clOffCanvas = function () {

        var menuTrigger = $('.header-menu-toggle'),
            nav = $('.header-nav'),
            closeButton = nav.find('.header-nav__close'),
            siteBody = $('body'),
            mainContents = $('section, footer');

        menuTrigger.on('click', function (e) {
            e.preventDefault();
            siteBody.toggleClass('menu-is-open');
        });

        closeButton.on('click', function (e) {
            e.preventDefault();
            menuTrigger.trigger('click');
        });

        siteBody.on('click', function (e) {
            if (!$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span')) {
                siteBody.removeClass('menu-is-open');
            }
        });

    };

    /* Stat Counter
     * ------------------------------------------------------ */
    var clStatCount = function () {

        var statSection = $(".about-stats"),
            stats = $(".stats__count");

        statSection.waypoint({

            handler: function (direction) {

                if (direction === "down") {

                    stats.each(function () {
                        var $this = $(this);

                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 4000,
                            easing: 'swing',
                            step: function (curValue) {
                                $this.text(Math.ceil(curValue));
                            }
                        });
                    });

                }

                // trigger once only
                this.destroy();

            },

            offset: "90%"

        });
    };

    /* Masonry
     * ---------------------------------------------------- */
    var clMasonryFolio = function () {

        var containerBricks = $('.masonry');

        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
                resize: true
            });
        });
    };

    /* slick slider
     * ------------------------------------------------------ */
    var clSlickSlider = function () {

        $('.clients').slick({
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnFocus: false,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }

            ]
        });

    };

    /* Smooth Scrolling
     * ------------------------------------------------------ */
    var clSmoothScroll = function () {

        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
                $target = $(target);

            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };

    /* Animate On Scroll
     * ------------------------------------------------------ */
    var clAOS = function () {

        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 300,
            once: true,
            disable: 'mobile'
        });

    };

    /* Back to Top
     * ------------------------------------------------------ */
    var clBackToTop = function () {

        var pxShow = 500,
            fadeInTime = 400,
            fadeOutTime = 400,
            scrollSpeed = 300,
            goTopButton = $(".go-top")

        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };

    function transformLetters() {
        const classes = [
            ".i", ".strive", ".to", ".make", ".the", ".world", ".a", ".beautiful", ".place", 
            ".one", ".line", ".of", ".code", ".at", ".a-2", ".time"
        ];
    
        const $ = document.querySelector.bind(document);
        const elements = classes.map(cls => $(cls));
    
        const scroll = window.scrollY;
    
        elements.forEach((element, index) => {
            const scrollFactorX = [-0.95, 0.65, -0.5, -0.25, -0.5, 0.85, 0, -0.45, 0, 0, -0.25, -0.5, 0.85, 0, -0.45, 0.65][index];
            const scrollFactorY = [1.4, 0.9, 1, 0.5, 0.7, 0.3, 1.2, 0.35, 0.9, 0.5, 0.7, 0.3, 1.2, 0.35, 0.9, 1][index];
            const rotationFactor = [-0.45, -0.1, 0.2, -0.25, -0.1, 1, 0.2, -0.3, -0.1, 1, -0.1, 1, 1, -0.3, -0.7, 0.2][index];
    
            const transformX = `translate3d(${scroll * scrollFactorX}px, ${scroll * scrollFactorY}px, 0)`;
            const transformY = `rotate(${scroll * rotationFactor}deg)`;
            const transform = `${transformX} ${transformY}`;
    
            element.style.transform = transform;
        });
    }

    window.addEventListener("scroll", transformLetters);

    (function ssInit() {
        clMenuOnScrolldown();
        clOffCanvas();
        clStatCount();
        clMasonryFolio();
        clSlickSlider();
        clSmoothScroll();
        clAOS();
        clBackToTop();
        transformLetters();
    })();

})(jQuery);