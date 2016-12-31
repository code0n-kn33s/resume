//
setTimeout(function() {
    var el = document.querySelector('.item1');
    el.style.width = '85%';
}, 1000);

setTimeout(function() {
    var el = document.querySelector('.item2');
    el.style.width = '85%';
}, 1000);

setTimeout(function() {
    var el = document.querySelector('.item3');
    el.style.width = '45%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item4');
    el.style.width = '60%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item5');
    el.style.width = '75%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item6');
    el.style.width = '65%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item7');
    el.style.width = '90%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item8');
    el.style.width = '85%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item9');
    el.style.width = '70%';
}, 1000);
setTimeout(function() {
    var el = document.querySelector('.item10');
    el.style.width = '80%';
}, 1000);

setTimeout(function() {
    var el = document.querySelector('.item11');
    el.style.width = '32%';
}, 1000);

setTimeout(function() {
    var el = document.querySelector('.item12');
    el.style.width = '60%';
}, 1000);

setTimeout(function() {
    var el = document.querySelector('.item13');
    el.style.width = '75%';
}, 1000);
//end skills

//scroll
$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});

// end scroll




//to end animation
