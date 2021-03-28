$(document).ready(function(){
  $('.corousel__inner').slick({
   adaptiveHeight: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   speed: 700,
   waitForAnimate:false,
   touchThreshold: 7,
   responsive: [
    {
      breakpoint: 1150,
      settings: {
        arrows: false,
        dots: true
      }
    }   
  ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  $('ul.goods__tabs').on('click', 'li:not(.goods__tab_active)', function() {
    $(this)
      .addClass('goods__tab_active').siblings().removeClass('goods__tab_active')
      .closest('div.container').find('div.goods__content').removeClass('goods__content_active').eq($(this).index()).addClass('goods__content_active');
  });

  function toggleSlide(item){
    $(item).each(function(i){
      $(this).on('click',function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  };

  function toggleSlideSecond(item){
    $(item).each(function(i){
      $(this).on('click',function(e){
        e.preventDefault();
        $('.goods-item__content').eq(i).toggleClass('goods-item__content_active');
        $('.goods-item__list').eq(i).toggleClass('goods-item__list_active');
      })
    })
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  toggleSlideSecond('.goods-item__link');
  toggleSlideSecond('.goods-item__link-back')


 // modal
 $('[data-modal=consultation]').on('click',function(){
  $('.overlay, #consultation').fadeIn(500);
 });
 $('.modal__close').on('click',function(){
  $('.overlay, #consultation, #thanks, #order').fadeOut();
 });
   $('.modal__sub').on('click',function(){
     $('#consultation,#order').fadeOut();
     $('#thanks').fadeIn(100);
   })

 $('.button_mini').each(function(i){
  $(this).on('click',function(){
    $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
    $('.overlay, #order').fadeIn('slow')
  })
 })

function validateForms(form){
  $(form).validate({
    rules:{
      name: {
        required: true,
        minlength: 2
      },
      phone: "required",
      email: {
        required: true,
        email: true
      }
      
    },
    messages: {
      name: {
        required: "Пожалуйста, введите ваше имя",
        minlength: jQuery.validator.format("Ваше имя должно быть не менее {0} символов!")
      },
      phone: "Пожалуйста, введите свой номер",
      email: {
        required: "Пожалуйста, введите свою почту",
        email: "Неправельно введен адресс почты"
      }
    }
  });
}

validateForms('#order form');
validateForms('#consultation-form');
validateForms('#consultation form');

$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function(e){
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function(){
    $(this).find("input").val("");
    $('#consultation,#order').fadeOut();
    $('.overlay,#thanks').fadeIn('slow');
    $('form').trigger('reset');
  });
  return false;
});


// Smooth scroll and page up
  $(window).scroll(function(){
    if($(this).scrollTop()> 1600){
      $('.pageup').fadeIn();
    }else{
      $('.pageup').fadeOut();
    }
  });

  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

new WOW().init();

});