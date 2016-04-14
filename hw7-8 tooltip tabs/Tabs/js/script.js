$(document).ready(function() {
	
	$tabNav = $('.tab__nav-item');
	$tabContent = $('.tab__content-item');


	$tabNav.on('click', function() {
		// $itemNumber = $(this).attr('data-item');
		$itemNumber = $(this).index();

		console.log($itemNumber);


		// убираем поставленный ранее класс-метку активного таба
		$tabNav.removeClass('tab__nav-item--active');

		// делаем соотв. таб активным
		$tabNav.eq($itemNumber).addClass('tab__nav-item--active');


		// убираем поставленный ранее класс-метку активного вклдаки
		$tabContent.removeClass('tab__content-item--active');

		// делаем соотв. вклдаку активной
		$tabContent.eq($itemNumber).addClass('tab__content-item--active');
	});
});