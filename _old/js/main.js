/*========================================
=                  MENU                  =
========================================*/


var $menuOverlay = $("<div class='menu-overlay'></div>");
var $menuIcon = $(".menu-icon");
var $menuBody = $(".main-nav");

var menu_fadeOutTime = 200;
var menu_fadeInTime = 200;

$("body").append($menuOverlay);

$menuIcon.click(function() {
  // prevent default action of clicking a link
  event.preventDefault();

  if($menuBody.hasClass("show-nav")) {
    // nav close
    hideMainNav();
  } else {
    // nav open
    showMainNav();
  }
});

var showMainNav = function() {
  // nav open
  $menuBody.addClass("show-nav");
  $menuIcon.addClass("show-nav");
  $(".menu-icon span").fadeOut(200);
  // fade out content
  $menuOverlay.stop(true,false).fadeIn(menu_fadeInTime);
  $(".menu-icon p").fadeIn(500); 
}

var hideMainNav = function() {
  // nav close
  $menuBody.removeClass("show-nav");
  $menuIcon.removeClass("show-nav");
  // fade in content
  $menuOverlay.stop(true,false).fadeOut(menu_fadeOutTime);
  $(".menu-icon span").fadeIn(200);
  $(".menu-icon p").fadeOut(200);
}

// fades in content on menuOverlay click
$menuOverlay.click(function() {
  // nav close
  hideMainNav();
});











