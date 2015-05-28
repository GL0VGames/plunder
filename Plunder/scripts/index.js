$(function () {
	function lightTheme() {
		localStorage.theme = "light";
		$('nav').css("backgroundColor", "silver");
		$('nav a').css("color", "black");
		$('.modal, .tabs .tab a, .modal .modal-footer, .side-nav').css("backgroundColor", "white");
		$('body').css("backgroundColor", "gainsboro");
		$('.card').css("backgroundColor", "white");
	}
	function darkTheme() {
		localStorage.theme = "dark";
		$('nav').css("backgroundColor", "#555555");
		$('nav a').css("color", "white");
		$('.modal, .tabs .tab a, .modal .modal-footer, .side-nav').css("backgroundColor", "rgba(219, 219, 219, 1)");
		$('body').css("backgroundColor", "rgb(30, 30, 30)");
		$('.card').css("backgroundColor", "rgb(62, 62, 66)");
	}

	// Get deck and user
	var scope = $('[ng-controller="plunderController"]').scope();
	scope.getDeck();
	scope.getUser();
	scope.$apply();
	images();
	if (typeof (sessionStorage.username) !== "undefined")
		$('.logged').html("Sign Out");

	// Set theme from localStorage if it's there
	if (typeof (localStorage.theme) !== "undefined") {
		if (localStorage.theme == "light") {
			lightTheme();
			$('#theme').click();
		}
	} else {
		localStorage.theme = "dark";
	}

	// Plugins and stuff
	$(".button-collapse").sideNav({
			"menuWidth": 270
	});
	$('.main-car').slick();
	$('.modal-trigger').leanModal({
		//"dismissible": false
	});
	$('.preloader-wrapper').hide();

	$('#theme').change(function () {
		if ($('#theme').is(':checked')) {
			// Light theme
			lightTheme();
		} else {
			// Dark theme
			darkTheme();
		}
		$('.side-nav a').css("color", "black");
	})

	// Slide content when you click menu options
	$('.deckButton').click(function () {
		$('.main-car').slick('slickGoTo', 0);
		//console.log($('.main-car').slick('slickCurrentSlide'));
	});
	$('.friendsButton').click(function () {
		$('.main-car').slick('slickGoTo', 1);
	});
	$('.storeButton').click(function () {
		$('.main-car').slick('slickGoTo', 2);
	});
	$('.optionsButton').click(function () {
		if ($('.main-car').slick('slickCurrentSlide') === 0) {
			//$('#deckSideNav').sideNav('show');
		}
		else $('.main-car').slick('slickGoTo', 3);
	});

	$('.logged').click(function () {
		if ($(($('.logged'))[0]).text() == "Sign Out") {
			delete sessionStorage.clientKey;
			delete sessionStorage.username;
			delete sessionStorage.deck;
			var scope = $('[ng-controller="plunderController"]').scope();
			scope.getDeck();
			scope.getUser();
			scope.$apply();
			$('.logged').html("Login");
		}
	});

	// Login
	$("#loginSubmit").click(function () {
		var uname = $("#luname").val().toString();
		var pass = MD5($('#lpass').val().toString());

		// Send to Server (DATABASE)
		var signin = {
			"username": uname,
			"password": pass
		}

		sessionStorage.username = uname;
		var scope = $('[ng-controller="plunderController"]').scope();
		scope.getDeck();
		scope.getUser();
		scope.$apply();
		images();
		$('#theme').change();
		$('#modal1').closeModal();
		$('.logged').html("Sign Out");
	});


	// Parse Data (Signup)
	$('#signupSubmit').click(function () {
		var typeEnum = Object.freeze([ "fire", "water", "earth", "air", "electricity"]);

		// Create Deck
		var deck = [];
		for (var count = 0; count < 36; count++) {
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

		// Validate New User (checks for unique username) (DATABASE)
		

		// Send New (with empty deck)
		var user = {
			"username": uname,
			"password": pass,
			"key": sessionStorage.clientKey,
			"deck": deck
		}

		// Send User (if server allows) (DATABASE)


		// End
		sessionStorage.username = uname;
		var scope = $('[ng-controller="plunderController"]').scope();
		scope.getDeck();
		scope.getUser();
		scope.$apply();
		images();
		$('#theme').change();
		$('#modal1').closeModal();
		$('.logged').html("Sign Out");
	});

	// Assign Images
	function images() {
		if ($('.png').length > 0) {
			var pngs = $('.png');
			for (var x = 0; x < pngs.length; x++) {
				pngID = $(pngs[x]).attr("id").split("-");
				pngElement = pngID[0];
				pngStrength = pngID[1];
				if (pngElement == "water") {
					if (pngStrength == 0)
						$(pngs[x]).attr('src', 'images/png/water1.png');
					else if (pngStrength == 1)
						$(pngs[x]).attr('src', 'images/png/water2.png');
					else if (pngStrength == 2)
						$(pngs[x]).attr('src', 'images/png/water3.png');
					else if (pngStrength == 3)
						$(pngs[x]).attr('src', 'images/png/water4.png');
					else if (pngStrength == 4)
						$(pngs[x]).attr('src', 'images/png/water5.png');
				} else if (pngElement == "fire") {
					if (pngStrength == 0)
						$(pngs[x]).attr('src', 'images/png/fire1.png');
					else if (pngStrength == 1)
						$(pngs[x]).attr('src', 'images/png/fire2.png');
					else if (pngStrength == 2)
						$(pngs[x]).attr('src', 'images/png/fire3.png');
					else if (pngStrength == 3)
						$(pngs[x]).attr('src', 'images/png/fire4.png');
					else if (pngStrength == 4)
						$(pngs[x]).attr('src', 'images/png/fire5.png');
				} else if (pngElement == "earth") {
					if (pngStrength == 0)
						$(pngs[x]).attr('src', 'images/png/earth1.png');
					else if (pngStrength == 1)
						$(pngs[x]).attr('src', 'images/png/earth2.png');
					else if (pngStrength == 2)
						$(pngs[x]).attr('src', 'images/png/earth3.png');
					else if (pngStrength == 3)
						$(pngs[x]).attr('src', 'images/png/earth4.png');
					else if (pngStrength == 4)
						$(pngs[x]).attr('src', 'images/png/earth5.png');
				} else if (pngElement == "air") {
					if (pngStrength == 0)
						$(pngs[x]).attr('src', 'images/png/air1.png');
					else if (pngStrength == 1)
						$(pngs[x]).attr('src', 'images/png/air2.png');
					else if (pngStrength == 2)
						$(pngs[x]).attr('src', 'images/png/air3.png');
					else if (pngStrength == 3)
						$(pngs[x]).attr('src', 'images/png/air4.png');
					else if (pngStrength == 4)
						$(pngs[x]).attr('src', 'images/png/air5.png');
				} else if (pngElement == "electricity") {
					if (pngStrength == 0)
						$(pngs[x]).attr('src', 'images/png/elec1.png');
					else if (pngStrength == 1)
						$(pngs[x]).attr('src', 'images/png/elec2.png');
					else if (pngStrength == 2)
						$(pngs[x]).attr('src', 'images/png/elec3.png');
					else if (pngStrength == 3)
						$(pngs[x]).attr('src', 'images/png/elec4.png');
					else if (pngStrength == 4)
						$(pngs[x]).attr('src', 'images/png/elec5.png');
				}
			}
		}
	}
});
