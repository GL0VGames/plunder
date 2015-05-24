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


	// Parse Data (Signup)
	$('#signupSubmit').click(function () {
		var typeEnum = Object.freeze([ "fire", "water", "earth", "air", "electricity"]);

		// Create Deck
		var deck = [];
		for (var count = 0; count < 30; count++) {
			var type = typeEnum[Math.floor(Math.random() * 5)];
			var strength = Math.floor(Math.random() * 5);
			deck[count] = {
				"element": type,
				"strength": strength
			}
		}
		sessionStorage.deck = JSON.stringify(deck);
		
		// Get Data From Page
		var uname = $('#suname').val().toString();
		var pass = MD5($('#spass').val().toString());
		var d = new Date();
		sessionStorage.clientKey = MD5(uname + pass + d.getTime());

		// Validate New User (checks for unique username)


		// Send New (with empty deck)
		var user = {
			"username": uname,
			"password": pass,
			"key": sessionStorage.clientKey,
			"deck": deck
		}

		// Send User (if server allows)


		$('#modal1').closeModal();
	});
});
