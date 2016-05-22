define(
    'Model',
    [],
    function () {
        return Model = function Model(data) {
            var self = this;

            // данные
            self.data = data;

            // добавить пункт в данные
            self.addItem = function (item) {
                if (item.length === 0) {
                    return;
                }
                self.data.push(item);
                return self.data;
            };

            // удалить пункт данных
            self.removeItem = function (item) {
                var index = self.data.indexOf(item);
                if (index === -1) {
                    return;
                }
                self.data.splice(index, 1);
                return self.data;
            };

            // редактировать пункт данных
            self.editItem = function (index, text) {
                if (text != '') {
                    self.data[index] = text;
                }
                return self.data;
            }
        };
    }
);