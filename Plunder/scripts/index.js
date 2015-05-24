$(function () {
	$(".button-collapse").sideNav();
	console.log("md5: " + MD5("hi"));
	$('.main-car').slick();

	function homeClick() {
		$('.main-car').slick('slickGoTo', 0);
	}
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
});
