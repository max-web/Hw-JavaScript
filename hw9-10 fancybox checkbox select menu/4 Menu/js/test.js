



$(document).ready(function() {
	



	var $link = $('.menu li');
	var $parent = $('.menu ul').prev(); 
	var $logo = $('.logo .fa');

	// добавляет ментку для пуктнов с подпунтами
	$parent.addClass('parent');

	//анимация логотипа
	$logo
		.addClass('rotate')
		.animate({'color': '#1E63BA'}, 1000);


	// плавное появление/исчезновение выпадющего меню
	$link.hover(function() {

		$(this)
			.children('.submenu')
			.animate({
    			'opacity': 'show'
			}, 300);		

	}, function() {
		$(this)
			.children('.submenu')
			.animate({
    			'opacity': 'hide'
			}, 300);		
	});





});



