(function($){
    $(window).on('load', function(){
        $(".pre-loader").fadeOut();
    });
    $(document).ready(function() {
        $('.page-wrap').scrollbar();
        $('.menus-wrap').scrollbar();
        $('#nav-icon3').click(function() {
            $(this).toggleClass('open');
            $(".menus-wrap").toggleClass('open');
            $(".menus-wrap").toggleClass('animated bounceInDown');
        });
    });
}(jQuery));
        
console.log("Custom sdd js");