
ProgrammingTest = {
	create: function() {
		var element = document.createElement('div');
		element.classList.add('wrapper');
		element.innerHTML = '<h1>Тест по программированию</h1><h2>1. Вопрос №1</h2><label><input type="checkbox">Вариант ответа №1</label><label><input type="checkbox">Вариант ответа №2</label><label><input type="checkbox">Вариант ответа №3</label><h2>2. Вопрос №2</h2><label><input type="checkbox">Вариант ответа №1</label><label><input type="checkbox">Вариант ответа №2</label><label><input type="checkbox">Вариант ответа №3</label><h2>3. Вопрос №3</h2><label><input type="checkbox">Вариант ответа №1</label><label><input type="checkbox">Вариант ответа №2</label><label><input type="checkbox">Вариант ответа №3</label><input type="submit" value="Проверить мои результаты" class="btn-submit">';
		document.body.appendChild(element);
	}
};

ProgrammingTest.create();




/* html-код

	<div class="wrapper">

		<h1>Тест по программированию</h1>
		<h2>1. Вопрос №1</h2>
		<label><input type="checkbox">Вариант ответа №1</label>
		<label><input type="checkbox">Вариант ответа №2</label>
		<label><input type="checkbox">Вариант ответа №3</label>
		<h2>2. Вопрос №2</h2>
		<label><input type="checkbox">Вариант ответа №1</label>
		<label><input type="checkbox">Вариант ответа №2</label>
		<label><input type="checkbox">Вариант ответа №3</label>
		<h2>3. Вопрос №3</h2>
		<label><input type="checkbox">Вариант ответа №1</label>
		<label><input type="checkbox">Вариант ответа №2</label>
		<label><input type="checkbox">Вариант ответа №3</label>

		<input type="submit" value="Проверить мои результаты" class="btn-submit">
	</div>


*/