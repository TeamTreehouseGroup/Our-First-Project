/*========================================
=                  MENU                  =
========================================*/


var $menuOverlay = $("<div class='menu-overlay'></div>");
var $menuIcon = $(".icon-menu");
var $menuBody = $(".main-nav");

var menu_fadeOutTime = 200;
var menu_fadeInTime = 200;

$("body").append($menuOverlay);

$menuIcon.click(function() {
  // prevent default action of clicking a link
  event.preventDefault();

  if($menuBody.hasClass("show-nav")) {
    // nav close
    $menuBody.removeClass("show-nav");
    $menuIcon.removeClass("show-nav");
    // fade in content, shows menu icon after animation is finished
    $menuOverlay.stop(true,false).fadeOut(menu_fadeOutTime, function() { 
      $(".icon-menu span").show();
    });
    $(".icon-menu p").fadeOut(100);
  } else {
    // nav open
    $menuBody.addClass("show-nav");
    $menuIcon.addClass("show-nav");
    $(".icon-menu span").hide();
    // fade out content
    $menuOverlay.stop(true,false).fadeIn(menu_fadeInTime, function() { 
      $(".icon-menu p").fadeIn(100); 
    });
  }
});

// fades in content on menuOverlay click
$menuOverlay.click(function() {
  // nav close
  $menuBody.removeClass("show-nav");
  // fade in content
  $menuOverlay.stop(true,false).fadeOut(menu_fadeOutTime);
});











