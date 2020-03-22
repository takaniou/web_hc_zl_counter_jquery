$(window).scroll(function () {
    $('*').each(function () {
        var windowTop = $(window).scrollTop();
        var offsetTop = $(this).offset().top;

        if (windowTop >= offsetTop - 800) {
            var number = $(this).attr('data-ct-number');
            var dur = $(this).attr('data-ct-duration');
            $(this).animate({
                countNum: number
            }, {
                    duration: parseInt(dur),
                    easing: 'linear',
                    step: function (now) {
                        $(this).text(Math.floor(now));
                    }
                })

        }

    })
});

