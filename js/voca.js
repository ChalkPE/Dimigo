function start(callback){
    var $script = document.createElement('script');
    $script.src = "//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild($script);

    setTimeout(function(){
        jQuery.noConflict();
        callback(jQuery);
    }, 2000);
}

function makeCell(text, isKey){
    return jQuery('<td>').text(text.toLowerCase()).css({
        'padding-top': '30px',
        'padding-left': isKey ? '80px' : '20px',

        'font-size': '20px',
        'font-family': 'Ubuntu, "나눔고딕"',
        'font-weight': isKey ? 'bold' : 'normal'
    });
}

function parse($){
    $('#voca').empty().css('position', 'static').css('text-align', 'left').append($('<table>').append('<tbody>'));

    var $column = $('<tr>');
    var columnCount = 3;

    $('#content script').first().text().split('\n').map(function(line){
        return line.match(/wordInput\('(.*)','(.*)',(.*?)\);/);
    }).filter(function(match){
        return match !== null;
    }).sort(function(a, b){
        return a[1].localeCompare(b[1]);
    }).map(function(word){
        return [makeCell(word[1], true), makeCell(word[2])];
    }).forEach(function(cells, index){
        $column.append(cells);
        if(index % columnCount === columnCount - 1){
            $('#voca tbody').append($column);
            $column = $('<tr>');
        }
    });
}

start(parse);
