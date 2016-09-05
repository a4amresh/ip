$(document).ready(function() {
    $('.page-wrap').scrollbar();
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
        $(".menus-wrap").toggleClass('open');
    });

    // init Masonry
    var grid = document.querySelector('.grid');
    var msnry;

    imagesLoaded(grid, function() {
        // init Isotope after all images have loaded
        msnry = new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    });
});