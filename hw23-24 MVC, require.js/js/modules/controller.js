define(
    'Controller',
    [
        'jquery'
    ],
    function ($) {
        
        return Controller = function Controller(model, view) {
            var self = this;
            var index = 0;

            // добавить задачу
            view.elements.addBtn.on('click', addItem);
            function addItem() {
                var newItem = view.elements.input.val();
                if (view.elements.addBtn.text() == 'Добавить') {
                    model.addItem(newItem);

                } else {
                    view.elements.addBtn.text('Добавить');
                    model.editItem(index, view.elements.input.val());
                }
                view.renderList(model.data);
                view.elements.input.val('');

            }

            // удалить задачу
            view.elements.listContainer.on('click', '.item-delete', removeItem);
            function removeItem() {
                var item = $(this).attr('data-value');
                model.removeItem(item);
                view.renderList(model.data);
            }

            // изменить задачу
            view.elements.listContainer.on('click', '.item-edit', editItem);
            function editItem() {
                index = $(this).parent().parent().index();
                view.elements.input.val(model.data[index]).focus();
                view.elements.addBtn.text('Изменить');


            }
        };
    }
);
