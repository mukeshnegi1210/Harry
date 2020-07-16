$(function() {
    $('.portfolios .tab-list li').click(function() {
        var get_id = $(this).attr('data-id');
        $('.portfolios .tab-list li').removeClass('active');
        $(this).addClass('active');
        $('.portfolios .tab-content').removeClass('active');
        $(get_id).addClass('active');
    });


    // industry partner carousel (uses the Owl Carousel library)
    $(".industry-partner-list").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        margin: 20,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            900: {
                items: 5
            }
        }
    });


    // back to top button  and header fixing

    // show/hide nav  header on page load
    showBackToTop();
    fixedHeader();

    $(window).scroll(function() {
        // show/hide back to top button on scroll
        showBackToTop();

        // show/hide header on scroll
        fixedHeader();
    });

    function showBackToTop() {

        if ($(window).scrollTop() > 500) {

            // Show fixed nav
            $(".back-to-top").fadeIn(300)
        } else {
            // Hide white nav
            $(".back-to-top").fadeOut(300)
        }
    }

    function fixedHeader() {

        if ($(window).scrollTop() > 100) {

            // Show fixed nav
            $("header").addClass('fixed-header');
        } else {
            // Hide white nav
            $("header").removeClass('fixed-header');
        }
    }

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    // Mobile Menu functionality

    $('.menu-open').click(function() {
        $('.primary-menu ').addClass('active');
    });

    $('.menu-close').click(function() {
        $('.primary-menu ').removeClass('active');
    });


    // cookies popup======================

    //check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
    if (getCookie('popupCookie') != 'submited') {
        if (getCookie('popupCookie') != 'closed') {
            $('.cookies-section').css("display", "block").hide().fadeIn();
        }
    }

    $('#decline-cookies').click(function() {
        $('.cookies-section').fadeOut();
        //sets the coookie to one minute if the popup is closed (whole numbers = days)
        setCookie('popupCookie', 'closed', .00069444444);
    });

    $('#accept-cookies').click(function() {
        $('.cookies-section').fadeOut();
        //sets the coookie to five minutes if the popup is submited (whole numbers = days)
        setCookie('popupCookie', 'submited', .0034722222);
    });

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }



    // animation

    AOS.init({
        delay: 200,
        duration: 800
    });
});