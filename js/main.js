$(function () {


  // slick for awesome feauture 

  $('.screenshots_img').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    nextArrow: false,
    prevArrow: false,
  });

  // venu box
  new VenoBox({
    selector: '.my-video-links',
  });


});