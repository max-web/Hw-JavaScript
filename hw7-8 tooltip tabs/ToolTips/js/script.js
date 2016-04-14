$(document).ready(function() {

	var $elements = $('[data-tooltip]');


	$elements.on('mouseover', function() {
		
		var tooltipText = $(this).attr('data-tooltip');
		// console.log(tooltipText);


		$(this).before('<div class="tooltip">' + tooltipText + '</div>');
		$('.tooltip').animate({ opacity: '1'}, 'fast');
	});


	$elements.on('mouseout', function() {
		$('.tooltip').remove();
	});
});

