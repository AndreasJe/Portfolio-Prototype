// NAV funktioner

var $page = $('.page');

$('.menu_toggle').on('click', function() {
  $page.toggleClass('shazam');
});
$('.content').on('click', function() {
  $page.removeClass('shazam');
});
$('.menu_items').on('click', function() {
  $page.removeClass('shazam');
});



console.log("Nav loaded");
// Scroll-fix til IOS

var scroll = window.requestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60)
  };

var elementsToShow = document.querySelectorAll('.show-on-scroll');

console.log("requestAnimationFrame loaded");
// tildeler class når elemenet er synligt

function loop() {

  elementsToShow.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

loop();
console.log("scroll-loop loaded");

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 &&
      rect.bottom >= 0) ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
console.log("isElementInViewport loaded");

// delay på page loag, så menu når at lukke

$(function() {
  $("a").click(function(evt) {
    evt.preventDefault();
    var link = $(this).attr("href");
    setTimeout(function() {
      window.location.href = link;
    }, 600);
  });
});
console.log("Fosinket Pageload aktiv");

document.querySelector("#test_box").addEventListener("click", visTest);
console.log("vis test");

function visTest() {

  document.querySelector('#pointClick_sound').volume = 1;
  document.querySelector('#pointClick_sound').play();
  console.log("lyd - spil pling-lyd");

}