$(function () {
	// Plugins and stuff
	$(".button-collapse").sideNav();
	$('.main-car').slick();
	$('.modal-trigger').leanModal({
		"dismissible": false
	});

	// Slide content when you click menu options
	$('.deckButton').click(function () {
		$('.main-car').slick('slickGoTo', 0);
		console.log($('.main-car').slick('slickCurrentSlide'));
	});
	$('.friendsButton').click(function () {
		$('.main-car').slick('slickGoTo', 1);
	});
	$('.storeButton').click(function () {
		$('.main-car').slick('slickGoTo', 2);
	});
	$('.optionsButton').click(function () {
		$('.main-car').slick('slickGoTo', 3);
	});

	// Login


	// Parse data (signup)
	var d = new Date();
	localStorage.clientKey = MD5(user.username + user.password + d.getTime());
	$('#signupSubmit').click(function () {

		var uname = toString($('#suname').val());
		var pass = toString($('#spass').val());

		// Validate new user (checks for unique username)


		$('#modal1').closeModal();
		// Send new (with empty deck)
		var user = {
			"username": uname,
			"password": MD5(pass),
			"key": localStorage.clientKey,
			"deck": null
		}

		// Create New User Deck

		// Send deck (if server allows)
	});
});
