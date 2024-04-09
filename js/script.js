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


// ==================== navbar toggler ====================

(function set_toggler_attr() {
    const toggler = document.querySelector("#nav-toggle-icon");
    if (window.innerWidth < 992) {
        toggler.setAttribute("data-bs-toggle", "offcanvas");
        toggler.setAttribute("data-bs-target", "#offcanvasRight");
    } else {
        toggler.setAttribute("data-bs-toggle", "collapse");
        toggler.setAttribute("data-bs-target", "#sidebarCollapse");
    }
})();
