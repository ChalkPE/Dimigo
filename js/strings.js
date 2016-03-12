var sketch = null;
Sketch.install(this);

$(function(){
    var size = min($(window).width(), $(window).height()) - 20;
    console.log(size);

    sketch = Sketch.create({
        fullscreen: false, width: size, height: size,
        container: document.getElementById('sketch')
    });

    function drawStrings(offset, radius, count, step, color){
        sketch.strokeStyle = color || '#000';

        for(var a = 0; a <= 360; a += (360 / count)){
            var start = [Math.sin(a                        * Math.PI / 180), Math.cos(a                        * Math.PI / 180)];
            var end   = [Math.sin((a + 360 / count * step) * Math.PI / 180), Math.cos((a + 360 / count * step) * Math.PI / 180)];

            sketch.beginPath();
            sketch.moveTo(offset + radius + radius * start[0], offset + radius + radius * start[1]);
            sketch.lineTo(offset + radius + radius * end[0],   offset + radius + radius * end[1]);
            sketch.stroke();
        }
    }

    sketch.draw = function(){
        sketch.fillStyle = '#fff';
        sketch.fillRect(0, 0, size, size);

        var offset = 16;
        var radius = (size - offset * 2) / 2;
        var count = 32;

        sketch.strokeStyle = '#000';
        sketch.beginPath();
        sketch.arc(offset + radius, offset + radius, radius, 0, 2 * Math.PI);
        sketch.stroke();

        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'magenta'];
        for(var i = 0; i < 7; i++) drawStrings(offset, radius, count, 3 + i * 2, colors[i]);

        console.log("AA");
    };

    function resize(){
        var margins = [
            ($(window).width() - $('#sketch canvas').width()) / 2,
            ($(window).height() - $('#sketch canvas').height()) / 2
        ].map(function(m){
            return m + 'px';
        });

        $('#sketch canvas').css('margin', [margins[1], margins[0], margins[1], margins[0]].join(' '));
        sketch.draw();
    }

    resize();
    $(window).resize(resize);
});
