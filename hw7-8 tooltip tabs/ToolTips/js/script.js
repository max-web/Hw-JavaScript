$(document).ready(function() {
	$('input[type="text"],input[type="password"]').on('mouseover', function() {
		
		var tooltipText = $(this).attr('data-tooltip');
		console.log(tooltipText);


		$(this).before('<div class="tooltip">' + tooltipText + '</div>');
		$('.tooltip').animate({ opacity: '1'}, 'fast');
	});


	$('input[type="text"],input[type="password"]').on('mouseout', function() {
		$('.tooltip').remove();
	});
});

