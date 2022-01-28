$(document).ready(function () {
  console.log("jquery ready");
});

// Cursor
(function () {
  const cursor = document.querySelector(".cursor");

  const moveCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  window.addEventListener("mousemove", moveCursor);
})();

// Dropdowns
$(function () {
  // em mobile
  if ($(window).width() < 767) {
    console.log("mobile");
    $("article").click(function () {
      $(this).children(".dropdown").slideToggle(1000);
      $(this).children(".details").toggleClass("active", 1000);
    });

    $(document).click(function (e) {
      let target = e.target;
      if (!$(target).is("article") && !$(target).parents().is("article")) {
        $(".dropdown").slideUp(1000);
        $(".details").removeClass("active");
      }
    });
  } else {
    // em desktop
    console.log("desktop");

    $(".details").click(function () {
      $("article").toggleClass("active");
      $("footer").toggleClass("active");
      $(this).toggleClass("active");
      $(this).siblings(".dropdown").slideDown(1000);

        // if click on any other details and not the one currently active hide current dropdown
        $('.details').not(this).each(function(){
            $(this).siblings(".dropdown").css('display', 'none');
            $(this).removeClass("active");      
            $("article").addClass("active");
            $("footer").addClass("active");
        });
        // if this isn't active
        if (!$(this).hasClass("active")){
          $(this).siblings(".dropdown").css('display', 'none');
          $("article").removeClass("active");
          $("footer").removeClass("active");
        }
    });

    //if click on any other part of the document
    $(document).click(function (e) {
      let target = e.target;
      if (!$(target).is("article") && !$(target).parents().is("article")) {
        $(".dropdown").css('display', 'none');
        $(".details").removeClass("active");
        $("article").removeClass("active");
        $("footer").removeClass("active");
      }
    });
  }
});

// Hover projetos
if ($(window).width() > 767) {
  $(".details").on("mouseover", hoverProj);

  function hoverProj() {
    $(this).children("h2, p").css("text-decoration", "underline");
    $(this).children("h2, p").css("font-style", "italic");
    $(".cursor").css("transition", "transform 0.2s ease");
    $(".cursor").css("transform", "translate(-50%, -50%) scale(3)");
  }

  $(".details").on("mouseout", hoverProjOut);

  function hoverProjOut() {
    $(this).children("h2, p").css("text-decoration", "none");
    $(this).children("h2, p").css("font-style", "normal");
    $(".cursor").css("transform", "translate(-50%, -50%) scale(1)");
  }

  // Hover links e dropdowns
  $("a").on("mouseover", hoverLinks);

  function hoverLinks() {
    $(".cursor").css("transition", "transform 0.2s ease");
    $(".cursor").css("transform", "translate(-50%, -50%) scale(3)");
  }

  $("a").on("mouseout", hoverLinksOut);

  function hoverLinksOut() {
    $(".cursor").css("transform", "translate(-50%, -50%) scale(1)");
  }

    // Hover about
    $(".hover-about").on("mouseover", hoverAbout);

    function hoverAbout(){
      $(".cursor").css("transition", "transform 0.3s ease");
    $(".cursor").css("transform", "translate(-50%, -50%) scale(40)");
    }

    $(".hover-about").on("mouseout", hoverAboutOut);

    function hoverAboutOut(){
    $(".cursor").css("transform", "translate(-50%, -50%) scale(1)");
    }
}

// Random color on page load
// array with colors
let colors = ["#205CC2", "#2D9C54", "#E67B1C", "#D1191A"];

// get random color from array
function getColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// set the color from array
document.documentElement.style.setProperty("--cor", getColor());

// Dropdown height
if ($(window).width() > 767) {

let altura = $('#work').height() + $('#contacts').height();

$('.dropdown').css('height', `${altura + 25}`);
}

// hide scroll msg on scroll up 
let targetOffset = $(".about").offset().top;

let $w = $(window).scroll(function(){
    if ( $w.scrollTop() < targetOffset ) {   
      $('#work i, #scroll').css('display', 'none');    
    } else {
      $('#work i, #scroll').css('display', 'block');    
    }
});