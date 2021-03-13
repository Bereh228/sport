$('.corousel__inner').slick({
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/slide_prev.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/slide_next.png"></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows: false
            }
          },
    ]
});