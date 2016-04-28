var size = 0;

var sketch = null;
Sketch.install(this);

$(function(){
    size = min($(window).width(), $(window).height()) - 20;
    console.log(size);

    sketch = Sketch.create({
        fullscreen: false, width: size, height: size,
        container: document.getElementById('sketch')
    });

    function resize(){
        var margins = [
            ($(window).width() - $('#sketch canvas').width()) / 2,
            ($(window).height() - $('#sketch canvas').height()) / 2
        ].map(function(m){
            return m + 'px';
        });

        $('#sketch canvas').css('margin', [margins[1], margins[0], margins[1], margins[0]].join(' '));
        if(sketch && sketch.draw) sketch.draw();
    }

    resize();
    $(window).resize(resize);
});
