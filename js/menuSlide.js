//Select menu unordered list
var $menu = $('.main-nav ul');

//Catch original height (couldn't find a way to animate "initial" value for height)
var originalHeight = $menu.css('height');

//Sets the height of the navigation to 0px
$menu.css('height', '0px');

//Click function - toggles between original height and 0px
$('.menu-icon').click(function(evt) {
	//Prevent default behavior
	evt.preventDefault();
	//Logic to recognize either to close or open the menu
	if($menu.css('height') === "0px") {
		$menu.css('height', originalHeight);
	} else {
		$menu.css('height', '0px');
	}
}); //end click function

// DELETE THIS 
// You have to add this to css to make this work:

// .main-nav ul {
//   overflow: hidden;
//   transition: height 0.25s ease 0s;
//   -webkit-transition: height 0.25s ease 0s;
// }