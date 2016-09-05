$(document).ready(function() {
    $('.page-wrap').scrollbar();
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
        $(".menus-wrap").toggleClass('open');
    });
});
        