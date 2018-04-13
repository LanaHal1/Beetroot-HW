// header animate scrolling
$(".header__nav a").click(function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    700
  );
});

// FEEDBACK Slider
$(document).ready(function () {
  $("#slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
  });
});


// BUTTON BACK to TOP
if ($("#button__page-up").length) {
  let scrollTrigger = 300; // px
  let backToTop = function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > scrollTrigger) {
      $("#button__page-up").addClass("is-visible");
    } else {
      $("#button__page-up").removeClass("is-visible");
    }
  };
  backToTop();
  $(window).scroll(function () {
    backToTop();
  });
  $("#button__page-up").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0
      },
      700
    );
  });
}