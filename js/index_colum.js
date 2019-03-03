//slider
$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,
    });
});
//fadein
$(function() {
    $('.cn').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
            $(this).stop().addClass('cn_show');
        }
        else{
            $(this).stop().removeClass('cn_show');
        }
    });
});
$(function() {
    $('.example').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
             $(this).stop().addClass('fadein_example');
        }
        else{
            $(this).stop().removeClass('fadein_example');
        }
    });
    $('.logo').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
            $(this).stop().addClass('logo_show');
        }
        else{
            $(this).stop().removeClass('logo_show');
        }
    });
});