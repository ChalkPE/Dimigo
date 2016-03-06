$(function(){
    var maxWidth = 0;
    $('td.gg').each(function(){
        var width = $(this).width();
        if(maxWidth < width) maxWidth = width;
    });

    $('td.gg').width(maxWidth);
    console.log(maxWidth);

    $('.mdi.mdi-book')            .addClass('amber-text text-darken-2');        //국어 I
    $('.mdi.mdi-calculator')      .addClass('blue-text text-darken-1');         //수학 I
    $('.mdi.mdi-alphabetical')    .addClass('light-blue-text text-lighten-2');  //영어 A
    $('.mdi.mdi-xml')             .addClass('red-text text-lighten-1');         //프로그래밍
    $('.mdi.mdi-lan')             .addClass('cyan-text text-darken-2');         //정보통신
    $('.mdi.mdi-math-compass')    .addClass('light-green-text text-darken-2');  //기초제도
    $('.mdi.mdi-vector-combine')  .addClass('pink-text text-lighten-2');        //그래픽 A
    $('.mdi.mdi-history')         .addClass('deep-purple-text text-darken-1');  //한국사
    $('.mdi.mdi-flask')           .addClass('teal-text text-lighten-2');        //과학
    $('.mdi.mdi-dribbble')        .addClass('red-text text-darken-4');          //운동
    $('.mdi.mdi-palette')         .addClass('deep-orange-text text-lighten-1'); //미술
    $('.mdi.mdi-briefcase')       .addClass('brown-text text-darken-2');        //진로
    $('.mdi.mdi-pen')             .addClass('blue-grey-text');                  //창제
    $('.mdi.mdi-account-multiple').addClass('pink-text');                       //동아리
});
