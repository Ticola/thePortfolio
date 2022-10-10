(function ($) {

    "use strict";

    var cfg = {
        scrollDuration: 800,
    },

        $WIN = $(window);

    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


    /* Preloader
     * -------------------------------------------------- */
    var clPreloader = function () {

        $("html").addClass('cl-preload');

        $WIN.on('load', function () {

            $("#loader").fadeOut("slow", function () {
                $("#preloader").delay(300).fadeOut("slow");
            });

            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');

        });
    };

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

        const $ = document.querySelector.bind(document);
        const first = $(".i");
        const second = $(".strive");
        const third = $(".to");
        const fourth = $(".make");
        const fifth = $(".the");
        const sixth = $(".world");
        const seventh = $(".a");
        const eighth = $(".beautiful");
        const ninth = $(".place");
        const tenth = $(".one");
        const eleventh = $(".line");
        const twelfth = $(".of");
        const thirteenth = $(".code");
        const fourteenth = $(".at");
        const fifteenth = $(".a-2");
        const sixteenth = $(".time");

        const scroll = window.scrollY;
        first.style.transform = `translate3d(0, ${scroll*1.4}px, 0) rotateY(${-scroll*0.45}deg)`;
        second.style.transform = `translate3d(${-scroll*0.95}px, ${scroll*0.90}px, 0) rotate(${-scroll*0.1}deg)`;
        third.style.transform = `translate3d(${scroll*0.65}px, ${scroll*1.0}px, 0) rotate(${scroll*0.2}deg)`;
        fourth.style.transform = `translate3d(${-scroll*0.5}px, ${scroll*0.50}px, 0) rotate(${-scroll*0.25}deg)`;
        fifth.style.transform = `translate3d(${-scroll*0.25}px, ${scroll*0.70}px, 0) rotate(${-scroll*0.1}deg)`;
        sixth.style.transform = `translate3d(${-scroll*0.50}px, ${scroll*0.30}px, 0) rotate(${scroll*1.0}deg)`;
        seventh.style.transform = `translate3d(${scroll*0.85}px, ${scroll*1.20}px, 0) rotate(${scroll*0.2}deg)`;
        eighth.style.transform = `translate3d(0, ${scroll*0.35}px, 0) rotateY(${-scroll*0.3}deg)`;
        ninth.style.transform = `translate3d(${-scroll*0.45}px, ${scroll*0.90}px, 0) rotate(${-scroll*0.1}deg)`;
        tenth.style.transform = `translate3d(0, ${scroll*0.5}px, 0) rotateY(${scroll*1.0}deg)`;
        eleventh.style.transform = `translate3d(${-scroll*0.25}px, ${scroll*0.70}px, 0) rotate(${-scroll*0.1}deg)`;
        twelfth.style.transform = `translate3d(${-scroll*0.50}px, ${scroll*0.30}px, 0) rotate(${scroll*1.0}deg)`;
        thirteenth.style.transform = `translate3d(${scroll*0.85}px, ${scroll*1.20}px, 0) rotate(${scroll*1.0}deg)`;
        fourteenth.style.transform = `translate3d(0, ${scroll*0.35}px, 0) rotateY(${-scroll*0.3}deg)`;
        fifteenth.style.transform = `translate3d(${-scroll*0.45}px, ${scroll*0.90}px, 0) rotate(${-scroll*0.7}deg)`;
        sixteenth.style.transform = `translate3d(${scroll*0.65}px, ${scroll*1.0}px, 0) rotate(${scroll*0.2}deg)`;
    }

    window.addEventListener("scroll", transformLetters);

    (function ssInit() {
        clPreloader();
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