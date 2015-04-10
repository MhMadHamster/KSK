$(document).ready(function() {

    $("#select-city").styler();

    $(".current-city").text($("#select-city option:selected").text());

    $("#select-city").on("change", function() {
        $(".current-city").text($("#select-city option:selected").text());
    })

    // Header News Slider
    $(".news-slider").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1
    });


    // Promo Block Sliders
    $(".promo-slider").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        asNavFor: ".promo-slider-nav"
    });

    $(".promo-slider-nav").slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        asNavFor: ".promo-slider",
        focusOnSelect: true
    });

    $(".promo-slider-nav .slick-active:not(:first)").removeClass("slick-active");

    // Categories SLider 
    $(".categories-slider").slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1
    });


    // Special Offers 
    $(".offer-text").on("click", function(e) {
        e.preventDefault();
        $(this).closest(".specials-offer").find(".specials-offer-item").removeClass("active");
        var offerIndex = $(this).closest(".specials-offer-item").addClass("active").index();
        offerIndex -= 1;
        $(".specials-content").find(".specials-content-item").removeClass("active")
        $(".specials-content-item:eq("+offerIndex+")").addClass("active");
    });

    // Partners Slider
    $(".partners-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        variableWidth: true,
        speed: 300
    });

    // Footer Scroll Button
    $(".scrollToTop").on("click", function(e) {
        e.preventDefault();
        $.scrollTo(".tags-wrapper", 500);
    })


    // Top Menu
    $(".main-menu-item a").on("mouseover", function() {
        $(this).closest(".main-menu-item").children("ul").effect('slide', { direction: 'up', mode: 'show' }, 100);
    })
    $(".main-menu-item, .sub-menu, .sub-sub-menu").on("mouseleave", function() {
        $(this).closest(".main-menu-item").children("ul").effect('slide', { direction: 'up', mode: 'hide' }, 100);
    });

    $(".sub-menu-item").on("click", function() {
        if (!$(this).hasClass('active')) {
            if($(".sub-menu-item.active").find("ul").length) {
                var subSubMenuWidth1 = $(".sub-menu-item.active").find(".sub-sub-menu").width() + 70;
                $(".sub-menu-item.active").closest(".sub-menu").animate({"width": "-=670px"}, 100)
            }
            $(this).closest("ul").find(".sub-menu-item").removeClass("active").children("ul").effect('slide', { direction: 'left', mode: 'hide' }, 100);
            $(this).addClass("active").children(".sub-sub-menu").effect('slide', { direction: 'left', mode: 'show' }, 100);
            var subSubMenuWidth2 = $(this).find(".sub-sub-menu").width() + 70;
            if($(this).find("ul").length) {
                $(this).closest(".sub-menu").animate({"width": "+="+subSubMenuWidth2+"px"}, 100)
            }
        };
    });



    // Breadcrumbs
    $(".breadcrumbs-list .breadcrumbs-list-item:last-child").on("click", function(e) {
        e.preventDefault();
    });


    // Side Menu 
    $(".side-menu-item").on("click", function(e){
        e.preventDefault();
        $(this).closest("ul").find(".side-menu-item").removeClass("active");
        $(this).closest("ul").find("ul").slideUp(300);
        $(this).addClass("active");
        $(this).closest("li").children("ul").slideDown(300);
    });


    // Tooltip
    $('.thumb-location').tooltip({
        tooltipClass: 'customToolTip'
    })

    $('.thumb-location').mousemove(function(e) {
        if ($(this).attr('title') != "") {
            $('#tooltipWindow div').html($(this).attr('title'));
            $('#tooltipWindow').css('left', e.clientX + 10).css('top', e.clientY + 10).addClass($(this).attr('class'));
            $('#tooltipWindow').show();
        }
    });
    $('.thumb-location').mouseleave(function (e) {
        $('#tooltipWindow').hide();
    });
    // }

    //Non Following Tooltip
    // $('.thumb-location').hover(function(e) {
    //     if ($(this).attr('title') != "") {
    //         $('#tooltipWindow div').html($(this).attr('title'));
    //         $('#tooltipWindow').css('left', e.clientX + 10).css('top', e.clientY + 10).addClass($(this).attr('class'));
    //         $('#tooltipWindow').show();
    //     }
    // },function (e) {
    //     $('#tooltipWindow').hide();
    // });

    // accordion
    function close_accordion_section() {
        $('.accordion-open-wrapper > span').text('Развернуть');
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {

        var currentAttrValue = $(this).attr('href');

        if($(this).hasClass('active')) {
          close_accordion_section();
        } else {
          close_accordion_section();

          $(this).addClass('active');
          $(this).find('.accordion-open-wrapper > span').text('Свернуть');
          $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();

    });



    // Certs slider
    $('.certs-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.certs-slider > .slick-next').hide();
    $('.certs-slider > .slick-prev').hide();

    $(".certs > .icon-next").on('click', function() {
        $('.certs-slider > .slick-next').trigger('click');
    });

    $(".certs > .icon-prev").on('click', function() {
        $('.certs-slider > .slick-prev').trigger('click');
    });



    // Company phono slider
    $('.company-photo-slider').slick({
        dots: false, 
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true
    })

    $('.company-photo-slider > .slick-next').hide();
    $('.company-photo-slider > .slick-prev').hide();

    $(".company-photo > .icon-next").on('click', function(e) {
        e.preventDefault();
        $('.company-photo-slider > .slick-next').trigger('click');
    });

    $(".company-photo > .icon-prev").on('click', function(e) {
        e.preventDefault();
        $('.company-photo-slider > .slick-prev').trigger('click');
    });


    // side menu

    $(".side-menu-header").first().addClass('active');
    $(".side-menu-wrapper " + $(".side-menu-header").first().attr('href')).show().addClass('open');

    $(".side-menu-header").on('click', function(e) {
        e.preventDefault();
        if(!$(this).hasClass('active')) {
            var currentSideMenuAttr = $(this).attr('href');
            $(this).closest('.side-menu-wrapper').find('.side-menu-header').removeClass('active');
            $(this).closest('.side-menu-wrapper').find('.side-menu').removeClass('open').slideUp(100);
            $(this).addClass('active');
            $('.side-menu-wrapper ' + currentSideMenuAttr).addClass('open').slideDown(100);
        }
    })


    // Product
    $('.product-slider-main').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.product-photo-slider'
    });

    $('.product-photo-slider').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-slider-main',
        focusOnSelect: true
    });

    $('.product-photo-slider > .slick-next').hide();
    $('.product-photo-slider > .slick-prev').hide();

    $(".product-photo-slider-wrapper > .icon-next").on('click', function(e) {
        e.preventDefault();
        $('.product-photo-slider > .slick-next').trigger('click');
    });

    $(".product-photo-slider-wrapper > .icon-prev").on('click', function(e) {
        e.preventDefault();
        $('.product-photo-slider > .slick-prev').trigger('click');
    });

    $('.rating-wrapper').mCustomScrollbar({
        axis: 'y',
        scrollButtons: false,
        theme: 'custom'
    })

    // Color slider 
    $('.color-slider').slick({
        dots: false, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    });

    $('.color-slider > .slick-next').hide();
    $('.color-slider > .slick-prev').hide();

    $(".color-slider-outer > .icon-next").on('click', function(e) {
        e.preventDefault();
        $('.color-slider > .slick-next').trigger('click');
    });

    $(".color-slider-outer > .icon-prev").on('click', function(e) {
        e.preventDefault();
        $('.color-slider > .slick-prev').trigger('click');
    });

    $('.color-item__button').on('click', function(e) {
        e.preventDefault();
        if(!$(this).hasClass('active')) {
            var currectColorItem = $(this).attr('href');
            $('.color-wrapper').find('.color-item__button').removeClass('active');
            $('.color-content-wrapper > .color-item__content').slideUp(300);
            $(this).addClass('active');
            $('.color-content-wrapper ' + currectColorItem).slideDown(300);
        }
    });

    // Accessories Slider
    $('.asries-slider').slick({
        dots: false, 
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.asries-slider > .slick-next').hide();
    $('.asries-slider > .slick-prev').hide();

    $(".accessories > .icon-next").on('click', function(e) {
        e.preventDefault();
        $('.asries-slider > .slick-next').trigger('click');
    });

    $(".accessories > .icon-prev").on('click', function(e) {
        e.preventDefault();
        $('.asries-slider > .slick-prev').trigger('click');
    });


    // Service
    $('.client-metro').styler();

    $('.order-service').on('click', function(e) {
    e.preventDefault();
    var currentServiceItem = $(this).closest('.service-item');
    if(!currentServiceItem.hasClass('active')) {
        var currentServiceItemId = $(this).attr('href');
        $('.service-row').find('.service-item').removeClass('active');
        $('.service-content > .service-content-item').slideUp(300);
        currentServiceItem.addClass('active');
        $('.service-content ' + currentServiceItemId).slideDown(300);
        }
    });

})