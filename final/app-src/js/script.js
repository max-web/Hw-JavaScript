/****************************************************************
Ajax запрос
*****************************************************************/
$(function() {
	// для ajax в ie+
	 $.support.cors = true;
	 $.ajaxSetup({ cache: false });

	// рандомные фото по умолчанию
    search(randomText());


    // кнопка
    $('#btnSearch').show().on('click', function() {
        search($("#txtSearchTerm").val());
    });

    // хоткей
    $('input').on('keydown', function(eventObj) {
    	// alert(eventObj.keyCode);
    	if (eventObj.keyCode === 13) {
    		// alert('нажат Enter');
			search($("#txtSearchTerm").val());
    	}
    });


});


function search(term) { 

    var url = 'https://pixabay.com/api/?key=2668103-5fd953825a02c25d2f0581911&q=' + escape(term) + '&image_type=photo';


    $.ajax({
		  url: url,
		  dataType: 'jsonp',
		  success: searchCompleted,
	      error: errorMsg,
	      cache: false //for ie8+
	});
	}


function errorMsg() { //обработка ошибок
	$("#output").html('<center style="color: red">Ajax error </center>');
	}


function searchCompleted(response) { // вывод результатов
	    // console.log(response);
	    // console.log(response.total);

	    var html = "";

	    // если результатов нет
	    if (response.total<7){
	    	$("#output").html('<center>Sorry. We did not find results for this</center>');
	        $('.ideas__container').isotope('destroy');
	        return
	    }




	    //шаблонизатор
	    var templateHtml = $('#test').html();
	    var content = tmpl(templateHtml, {data:response});
	    $("#output").html(content);
	 
	 	//переинициализация Masonry
	 		//пока идет рендеринг из-за переинициалиации Masonry - скрыть
	 		$('.ideas__item-descr').hide(); 
	 		$('.ideas__item-overlay').hide();
	 		// старт
	 		$('.ideas__container').isotope('destroy');
	 		$('.ideas__container').imagesLoaded(function() {
				$('.ideas__container').isotope({
					itemSelector: '.ideas__item',
					layoutMode: 'masonry',
					gutter: 10
				});
				//показать
	 			$('.ideas__item-descr').show();
	 			$('.ideas__item-overlay').show();
			});
	}


function randomText () {
	var text = ['sea', 'nature', 'relax','cat', 'dog', 'pool','sport','nature','animals','history','flower','auto','computer','science', 'health', 'ocean', 'women', 'space'];

	var wordNumber = Math.round(Math.random() * text.length);

	return text[wordNumber]
}





