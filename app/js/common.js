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

//scroll nav
$('[data-spy="scroll"]').each(function() {
    var $spy = $(this).scrollspy('refresh')
});
//end scroll nav
//scrolly title
$('.title').scroolly([{
    from: 'el-top = vp-bottom - 50px',
    to: 'el-bottom = vp-bottom - 70px',
    cssFrom: { opacity: '0.5' },
    cssTo: { opacity: '1' }
}, {
    from: 'el-top = vp-top + 50px',
    to: 'el-bottom = vp-top + 70px',
    cssFrom: { opacity: '1' },
    cssTo: { opacity: '0.5' }
}]);
//scrolly header
$('.header').scroolly([{

    to: 'el-bottom = vp-top',
    cssFrom: {

    },
    cssTo: {

    },
    onScroll: function(element, offset, length) {
        var progress = offset / length;

        element.css('background-position', 'center ' + $.scroolly.getTransitionFloatValue(0, 40, progress) + '%');
    }
}, {
    from: 'el-center = vp-top',
    to: 'el-bottom = vp-top',
    cssFrom: {

    },
    cssTo: {

    }
}]);
$('.wrap-header-info').scroolly([{
    from: 'con-top',
    to: 'con-bottom = top',
    cssFrom: {
        'text-shadow': '0 0 0px white',
        //'bottom': '100px',
        'transform': 'translateY(0px)',
        'opacity': '1'
    },

    cssTo: {
        'text-shadow': '0 0 30px white',
        // 'bottom': '10px',
        'transform': 'translateY(65px)',
        'opacity': '.1'
    }
}], $('.header'));
//effect title
$('.title').scroolly([{
    from: 'con-top = con-top + 100px',
    to: 'con-bottom = top',
    cssFrom: { 'margin-left': '0px' },
    cssTo: { 'margin-left': '20px' }
}, {
    from: 'con-top = con-bottom + 150px',
    to: 'con-bottom = bottom',
    cssFrom: { 'margin-left': '-30px' },
    cssTo: { 'margin-left': '0px' }

}]);
//parallax bg
(function() {

    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.5;

    window.onscroll = function() {
        [].slice.call(parallax).forEach(function(el, i) {

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "0%" + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };

})();
//
