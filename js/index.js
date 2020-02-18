//　ローディング表示
$(function() {
    var h = $(window).height(); 
    $('#loading__wrapper').css('display','none'); 
    $('#is-loading ,#loading').height(h).css('display','block');
});
$(window).on('load', function () { 
    $('#is-loading').delay(3000).fadeOut(3000);
    $('#loading').delay(2000).fadeOut(2000);
    $('#loading__wrapper').css('display', 'block');
});

