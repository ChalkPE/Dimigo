$(function(){
    $('td').each(function(){
        var classes = '';

        switch($(this).text()){
            case '국어 I': classes = 'book'; break;
            case '수학 II': classes = 'sigma'; break;
            case '영어 A': classes = 'spellcheck'; break;
            case '영어 B': classes = 'spellcheck'; break;
            case '프로그래밍': classes = 'code-brackets'; break;
            case '정보통신': classes = 'lan'; break;
            case '기초제도': classes = 'math-compass'; break;
            case '그래픽 A': classes = 'vector-combine'; break;
            case '그래픽 B': classes = 'vector-combine'; break;
            case '한국사': classes = 'history'; break;
            case '과학': classes = 'flask'; break;
            case '운동': classes = 'dribbble'; break;
            case '음악': classes = 'music-note'; break;
            case '진로': classes = 'briefcase'; break;
            case '창제': classes = 'pen'; break;
            case '동아리': classes = 'account-multiple'; break;
        }

        if(classes) $(this).prepend($('<i>').addClass('mdi mdi-' + classes), $('<br>'));
    });
});
