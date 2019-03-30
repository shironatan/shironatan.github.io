$(function(){
    $('.contents').each(function(i, elem){
        var contentsPOS = $(elem).offset().top;
        $(window).on('load scroll resize', function(){
            var winHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var showClass = 'show';
            var timing = 100; // 100pxコンテンツが見えたら次のif文がtrue
            if (scrollTop >= contentsPOS - winHeight + timing){
                $(elem).addClass(showClass);
            } else {
                $(elem).removeClass(showClass);
            }
        });
    });
});
//scroll
$(function(){
    $('a[href^=#]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
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
$(function() {
    $('.example').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
            $(this).stop().addClass('fadein_example');
        }
        else{
            $(this).stop().removeClass('fadein_example');
        }
    });
});