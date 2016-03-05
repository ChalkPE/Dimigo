$(function(){
    var maxWidth = 0;
    $('td.gg').each(function(){
        var width = $(this).width();
        if(maxWidth < width) maxWidth = width;
    });

    $('td.gg').width(maxWidth);
    console.log(maxWidth);
});
