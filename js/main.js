/*========================================
=                  MENU                  =
========================================*/


var $menuOverlay = $("<div class='menu-overlay'></div>");
var $menuIcon = $(".icon-menu");
var $menuBody = $(".main-nav");

var menu_fadeOutTime = 500;
var menu_fadeInTime = 500;

$("body").append($menuOverlay);

$menuIcon.click(function() {
  // prevent default action of clicking a link
  event.preventDefault();

  if($menuBody.hasClass("show-nav")) {
    // nav close
    $menuBody.removeClass("show-nav");
    // fade in content
    $menuOverlay.stop(true,false).fadeOut(menu_fadeOutTime);
  } else {
    // nav open
    $menuBody.addClass("show-nav");
    // fade out content
    $menuOverlay.stop(true,false).fadeIn(menu_fadeInTime);
  }
});

// fades in content on menuOverlay click
$menuOverlay.click(function() {
  // nav close
  $menuBody.removeClass("show-nav");
  // fade in content
  $menuOverlay.stop(true,false).fadeOut(menu_fadeOutTime);
});










