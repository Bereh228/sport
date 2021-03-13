$('.cor__inner').slick({
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/slide_prev.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/slide_next.png"></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});