$(function() {
	// кнопка
    $('#btnSearch').show().on('click', function() {
        Search($("#txtSearchTerm").val());
    });

    // хоткей
    $('input').on('keydown', function(eventObj) {
    	// alert(eventObj.keyCode);
    	if (eventObj.keyCode === 13) {
    		// alert('нажат Enter');
			Search($("#txtSearchTerm").val());
    	}
    });


});

// поиск
function Search(term) {
    var startIndex = 1;
    var mGoogleApiKey = 'AIzaSyCLh7D2V8SZgxvlNcd9hKlvgLyJMLmleKM';
    var mGoogleCustomSearchKey = '017519388818407892520:o-7nltkbjd4';

    var url = "https://www.googleapis.com/customsearch/v1?key=" + mGoogleApiKey + "&num=10&cx=" + mGoogleCustomSearchKey + "&start=" + startIndex + "&q=" + escape(term) + "&callback=?";


    $.ajax({
	  url: url,
	  dataType: 'json',
	  success: SearchCompleted
	});
}

// вывод результатов
function SearchCompleted(response) {
    var html = "";
    for (var i = 0; i < response.items.length; i++) {
        html += '<div class="search-item">' + response.items[i].htmlTitle + "</div>";
    }
    $("#output").html(html);
}
