console.log('JS file links');

var s = Snap("#mysvg");
var bigCircle = s.circle(150, 150, 100);

var text = s.text(200,120, 'Snap Animation Test');
text.attr({
    fill: "#0000ff",
    "font-size": "30px",
    "font-weight": "bold"
});
// var polygon = canvas.rect(100, 200, 500, 300);
