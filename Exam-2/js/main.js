// MAP GOOGLEAPI
initMap = () => {
  let beetroot = { lat: 47.829942, lng: 35.165572 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: beetroot,
    disableDefaultUI: true
  });
  let content = "<div><p>Title</p><p>Description</p></div>";
  let infowindow = new google.maps.InfoWindow({
    content: content
  });
  let marker = new google.maps.Marker({
    position: beetroot,
    map: map,
    title: "beetroot",
    icon: "./img/map.png"
  });
  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });
};

$(".header__nav a").click(function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    700
  );
});

// PORTFOLIO__Gallery
$(".grid").masonry({
  // options
  itemSelector: ".grid-item",
  columnWidth: 200
});

// init Isotope
var $grid = $(".grid").isotope({
  // options
});
// filter items on button click
$(".filter-nav-btn").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

//Simple filter controls
$(function() {
  $(".filter-nav-btn button").click(function() {
    $(".filter-nav-btn button").removeClass("active");
    $(this).addClass("active");
  });
});

// TEAM__Slider
$(document).ready(function() {
  $("#slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow:
      '<button type="button" class="slick-next"> <i class="fas fa-chevron-right"></i> </button>',
    prevArrow:
      '<button type="button" class="slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
  // TESTIMONIALS Slider
  $(".slider2").slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

// BUTTON BACK to TOP
if ($("#button__page-up").length) {
  let scrollTrigger = 300; // px
  let backToTop = function() {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > scrollTrigger) {
      $("#button__page-up").addClass("is-visible");
    } else {
      $("#button__page-up").removeClass("is-visible");
    }
  };
  backToTop();
  $(window).scroll(function() {
    backToTop();
  });
  $("#button__page-up").click(function(e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0
      },
      700
    );
  });
}
