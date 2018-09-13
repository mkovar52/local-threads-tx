// Responisve Nav
// $(function() {
//   menu = $("nav ul");

//   $("#openup").on("click", function(e) {
//     e.preventDefault();
//     menu.slideToggle();
//   });

//   $(window).resize(function() {
//     var w = $(this).width();
//     if (w > 480 && menu.is(":hidden")) {
//       menu.removeAttr("style");
//     }
//   });

//   $("nav li").on("click", function(e) {
//     var w = $(window).width();
//     if (w < 580) {
//       menu.slideToggle();
//     }
//   });
//   $(".open-menu").height($(window).height());
// });

// jarallax(document.querySelectorAll(".jarallax"), {
//   speed: 0.2
// });

function scrollFooter(scrollY, heightFooter) {
  console.log(scrollY);
  console.log(heightFooter);

  if (scrollY >= heightFooter) {
    $("footer").css({
      bottom: "0px"
    });
  } else {
    $("footer").css({
      bottom: "-" + heightFooter + "px"
    });
  }
}

$(window).load(function() {
  var windowHeight = $(window).height(),
    footerHeight = $("footer").height(),
    heightDocument =
      windowHeight + $(".content").height() + $("footer").height() - 20;

  // Definindo o tamanho do elemento pra animar
  $("#scroll-animate, #scroll-animate-main").css({
    height: heightDocument + "px"
  });

  // Definindo o tamanho dos elementos header e conteúdo
  $("header").css({
    height: windowHeight + "px",
    "line-height": windowHeight + "px"
  });

  $(".wrapper-parallax").css({
    "margin-top": windowHeight + "px"
  });

  scrollFooter(window.scrollY, footerHeight);

  // ao dar rolagem
  window.onscroll = function() {
    var scroll = window.scrollY;

    $("#scroll-animate-main").css({
      top: "-" + scroll + "px"
    });

    $("header").css({
      "background-position-y": 50 - (scroll * 100) / heightDocument + "%"
    });

    scrollFooter(scroll, footerHeight);
  };
});
