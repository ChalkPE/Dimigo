$(function(){
    var maxWidth = 0;
    $('.gg').each(function(){
        var width = $(this).width;
        if(maxWidth < width) maxWidth = width;
    });

    $('.gg').width(maxWidth);
});
