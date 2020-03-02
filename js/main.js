(function($) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 3,
            },
            992: {
                items: 5,
            },
        },
    });

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        },
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe',
    });

    $('.grid').imagesLoaded(function() {
        // init Isotope
        // eslint-disable-next-line no-unused-vars
        let $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            },
        });
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function() {
        let filterValue = $(this).attr('data-filter');
        // eslint-disable-next-line no-undef
        $grid.isotope({ filter: filterValue });
    });

    // for menu active class
    $('.portfolio-menu button').on('click', function(event) {
        $(this)
            .siblings('.active')
            .removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
})(jQuery);
