'use strict';

$(document).ready(function () {
    'use strict';

    /*******************************************************
    РАБОТА С localStorage
    *******************************************************/

    // данные теста

    var TestsData = ['Тест', {
        qwestion: 'Скорость света?',
        answer1: '60 км/час',
        answer2: '300 м/сeк',
        answer3: '300 000 км/сeк',
        asswerCorrect: '300 000 км/сeк'
    }, {
        qwestion: 'Спутники марса?',
        answer1: 'Деймос',
        answer2: 'Фобос',
        answer3: 'Нибиру',
        asswerCorrect: 'ДеймосФобос'
    }, {
        qwestion: 'Первый в истории космический апарат вылетевший за пределы Солнечной  системы?',
        answer1: 'Луноход-1',
        answer2: 'Вояджер-1',
        answer3: 'Звезда смерти',
        asswerCorrect: 'Вояджер-1'
    }];

    // записать данные в локальное хранилище
    localStorage.setItem('test', JSON.stringify(TestsData));

    // прочитать данные из локального хранилища
    var newTestsData = localStorage.getItem('test');
    newTestsData = JSON.parse(newTestsData);

    /*******************************************************
    Динамеское создание html шаблонизатором
    *******************************************************/

    // прочитать код шаблона
    var html = $('#test-template').html();

    // данные
    // console.log(newTestsData);

    // сгенерировать html-код
    var content = tmpl(html, { data: newTestsData });

    // добавить сгенерированный элемент
    $('body').append(content);

    /*******************************************************
    Проверка ответов
    *******************************************************/

    var score = 0; //количество правильных ответов
    var qwestion = $('.qwestion').size(); //общее количество вопросов
    // console.log('всего вопросов:', qwestion);

    // оптимизация jq кода - минимизация количества поисков по DOM
    var $answers = $('.answers');
    var $btnSubmit = $('.btn-submit');
    var $input = $('input');

    $btnSubmit.on('click', function (eventObj) {
        eventObj.preventDefault();

        $answers.each(function () {

            // текст вопроса
            console.log($(this).prev('.qwestion').text());

            var currentAnswer = $(this).find('input').filter(':checkbox:checked').parent().text();

            var correnctAnswer = $(this).find('.answerCorrect').text();

            if (currentAnswer === correnctAnswer) {
                score = score + 1; //колич. верных ответов для модального окна
            }
        });

        // данные в модальное окно
        console.log('МОДАЛЬНОЕ ОКНО: ' + score + ' правильных ответов из ' + qwestion);

        $('#modal-1').find('.modal-text').text(score + ' из ' + qwestion);

        // обнуление результатов и удаление чекбоксов
        score = 0;
        $input.filter(':checkbox:checked').prop('checked', false);
    });

    /*******************************************************
    Вывод модального окна с результатом
    *******************************************************/

    // появление модального окна
    $btnSubmit.on('click', function () {
        $('#modal-overlay').fadeIn('fast');
        $('#modal-1').fadeIn('fast');
    });

    //исчезновение модального окна
    $('#modal-overlay').on('click', function () {
        $('#modal-overlay').fadeOut('fast');
        $('#modal-1').fadeOut('fast');
    });
    $('.my-modal .close').on('click', function () {
        $('#modal-overlay').fadeOut('fast');
        $('#modal-1').fadeOut('fast');
    });
});