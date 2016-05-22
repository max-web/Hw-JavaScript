define(
    'View',
    [
        'jquery'
        
    ],
    function ($) {
        return View = function View(model) {

            var self = this;

            // инициализация приложения
            function init() {
                var wrapper = tmpl($('#wrapper-template').html());
                $('body').append(wrapper);
                self.elements = {
                    input: $('.item-value'),
                    addBtn: $('.item-add'),
                    listContainer: $('.item-list')
                };
                self.renderList(model.data); //рендеринг списка задач
            }

            // рендеринг списка задач
            self.renderList = function (data) {
                var list = tmpl($('#list-template').html(), {data: data});
                self.elements.listContainer.html(list);
            };

            init();
        };
    }
);
