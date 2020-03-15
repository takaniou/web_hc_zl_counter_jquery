$('*').each(function () {
    var number = $(this).attr('data-ct-number');
    var dur = $(this).attr('data-ct-duration');

    $(this).animate({
        countNum: number
    }, {
        duration: dur,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.floor(now));
        }
    })
})