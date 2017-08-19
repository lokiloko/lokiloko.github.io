// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.topnav').css('background-color', '#d7e0ef');
    } else {
        $('.topnav').css('background-color', '#F1F1F1');
    }
});