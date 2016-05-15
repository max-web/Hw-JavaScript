$(document).ready(function() {

	// появление модального окна
	$('#start-modal-1').on('click', function() {
		$('#modal-overlay').fadeIn('slow');
		$('#modal-1').fadeIn('slow');
	});

	//исчезновение модального окна
	$('#modal-overlay').on('click', function() {
		$('#modal-overlay').fadeOut('fast');
		$('#modal-1').fadeOut('fast');
	});

	$('.my-modal .close').on('click', function() {
		$('#modal-overlay').fadeOut('fast');
		$('#modal-1').fadeOut('fast');
	});	

});
