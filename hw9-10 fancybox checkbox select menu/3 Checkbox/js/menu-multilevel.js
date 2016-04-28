

// // скрываем мобильное меню по умолчанию
// $(document).ready(function() {
//     $(".toggleMenu").css("display", "none");
// });



// // появление подменю - добавляя .hover к <li>
// $(document).ready(function() {

//     $(".nav li").hover(function() {
//         $(this).addClass('hover');
//     }, function() {
//         $(this).removeClass('hover');
//     });

// });



$(document).ready(function() {
    
    var ww = document.body.clientWidth; //ширина окна браузера
    
    // xs-версия
    if (ww < 800) {

        $(".toggleMenu").css("display", "inline-block"); //появление кнопки моб. меню
        
        // появление подменю - по click добавляем/убираем .hover
        $(".nav li a").click(function() {
            $(this).parent("li").toggleClass('hover');
        });
    

    // lg-версия
    } else { 
        $(".toggleMenu").css("display", "none"); //скрываем кнопку моб. меню
        
        // появление подменю - по hover добавляем/убираем .hover
        $(".nav li").hover(function() {
            $(this).addClass('hover');
        }, function() {
            $(this).removeClass('hover');
        });
    }
});
