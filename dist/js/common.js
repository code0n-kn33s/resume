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
    $('.footer3').scroolly([{
        from: 'el-top = vp-bottom - 100px',
        to: 'el-bottom = vp-bottom - 100px',
        cssFrom: { opacity: '.0' },
        cssTo: { opacity: '1' }
    }, {
        from: 'el-center = vp-center + 30vp',
        to: 'el-center = vp-center - 30vp',
        cssFrom: { 'transform': 'rotate(0deg)' },
        cssTo: { 'transform': 'rotate(180deg)' }
    }, {
        from: 'el-top = vp-top + 100px',
        to: 'el-bottom = vp-top + 100px',
        cssFrom: { opacity: '1' },
        cssTo: { opacity: '.0' }
    }], $('.footer2'));
