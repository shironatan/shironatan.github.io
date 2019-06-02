
//slider
$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,
    });
});
$(function() {
    $('.img').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
            $(this).stop().addClass('fadein_img');
        }
        else{
            $(this).stop().removeClass('fadein_img');
        }
    });
});
//fadein
$(function() {
    $('.content1').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
            $(this).stop().addClass('fadein_content1');
        }
        else{
            $(this).stop().removeClass('fadein_content1');
        }
    });
});
$(function() {
    $('.content2').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
            $(this).stop().addClass('fadein_content2');
        }
        else{
            $(this).stop().removeClass('fadein_content2');
        }
    });
});

