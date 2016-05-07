(function($) {
$(document).ready(function() {

	$.fn.myCarousel = function(options) {
		var defaults = {
			slidesOffset:1
		};

		var settings = $.extend(defaults, options);
		

	    var $leftUIEl = $('.carousel-arrow-left');
	    var $rightUIEl = $('.carousel-arrow-right');
	    var $elementsList = $('.carousel-list');
	 
	    var pixelsOffset = 127;
	    var currentLeftValue = 0;
	    var elementsCount = $elementsList.find('li').length;
	    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
	    var maximumOffset = 0;
	 
	    $leftUIEl.click(function() {
	        if (currentLeftValue != maximumOffset) {
	            currentLeftValue += 127 * defaults.slidesOffset;
	            $elementsList.animate({ left : currentLeftValue + "px"}, 500);
	        } 
	    });
	 
	    $rightUIEl.click(function() {
	        if (currentLeftValue > minimumOffset) {
	            currentLeftValue -= 127 * defaults.slidesOffset;
	            $elementsList.animate({ left : currentLeftValue + "px"}, 500);
	        }  
	    });
	 


		return this;
	};

	


});
})(jQuery);
