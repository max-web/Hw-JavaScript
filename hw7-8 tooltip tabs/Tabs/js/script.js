$(document).ready(function() {
	

	$('.tab__nav-item').on('click', function() {
		// $itemNumber = $(this).attr('data-item');
		$itemNumber = $(this).attr('data-item');

		console.log($itemNumber);


		// убираем поставленный ранее класс-метку активного таба
		$('.tab__nav-item').removeClass('tab__nav-item--active');

		// делаем соотв. таб активным
		$('.tab__nav-item').eq($itemNumber).addClass('tab__nav-item--active');


		// убираем поставленный ранее класс-метку активного вклдаки
		$('.tab__content-item').removeClass('tab__content-item--active');

		// делаем соотв. вклдаку активной
		$('.tab__content-item').eq($itemNumber).addClass('tab__content-item--active');
	});
});