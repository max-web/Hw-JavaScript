$(document).ready(function() {
	
	// прочитать код шаблона
	var html = $('#test').html();
	
	// прописать данные
	var gameResults = [
		{
			name: 'Дон Кихот',
			country: 'Испания',
			score: '939'
		},
		{
			name: 'Джеки Чан',
			country: 'Китай',
			score: '840'
		},
		{
			name: 'Майк Тайсон',
			country: 'США',
			score: '760'
		},
		{
			name: 'Дон Карлеоне',
			country: 'Италия',
			score: '754'
		},
		{
			name: 'Во Нгуен Зиап',
			country: 'Вьетнам',
			score: '730'
		},
	];


	// сгенерировать html-код
		// наполнить шаблон данными 
		//сохранить html-код в переменную
	var content = tmpl(html, {
		data:gameResults //шаблонизатор не умеет работать с массивом напрямую, только через объект
	});

	// добавить сгенерированный элемент
	$('body').append(content);

});