require.config({
    baseUrl:'js/modules',
    paths: {
        "jquery"        : "https://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min"
    },
    shim: {
        
        'tmpl': {
            export: 'tmpl'
        } 
    }
});
require(
    [
        'tmpl',
        'jquery',
        'Model',
        'View',
        'Controller'
    ],
    function (tmpl,$, Model, View, Controller) {
        
        // инициализация приложения с исходными данными
        $(function () {
            var firstToDoList = ['Задача',
                'Задача',
                'Задача',
                'Задача',
                'Задача'
                ];
            var model = new Model(firstToDoList);
            var view = new View(model);
            var controller = new Controller(model, view);
        });
    }
);
    