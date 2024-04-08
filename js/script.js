// ==================== increasing numbers with animation ====================

$(document).ready(function () {

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now))
            }
        });
    });

});