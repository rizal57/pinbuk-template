// slick
// jquery
$(document).ready(function () {
  $(".slider").slick({
    // dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });

  // modal box
  $(".btn-card").click(function () {
    $(".modal").fadeIn();
  });

  $(".modal").click(function () {
    $(".modal").fadeOut();
  });
  $(".close").click(function () {
    $(".modal").fadeOut();
  });

  $(".modal-box").click(function (e) {
    e.stopPropagation();
  });
});
