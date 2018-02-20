function createDiagrama() {
    var canvas = document.getElementById("diagrama");
    var ctx = canvas.getContext("2d");
    var data = [73.2, 72.3, 71.6, 70.9, 60.9];
    ctx.fillStyle = "rgb(0,200,0)"
    ctx.fillRect(40, 100, 50, 500 - 140);
    ctx.fillRect(100, 130, 50, 500 - 170);
    ctx.fillRect(160, 160, 50, 500 - 200);
    ctx.fillRect(220, 190, 50, 500 - 230);
    ctx.fillRect(280, 140, 50, 500 - 180);

    ctx.fillStyle = "black";
    ctx.lineWidht = 1.0;
    ctx.moveTo(30, 90);
    ctx.lineTo(30, 460);
    ctx.lineTo(330, 460);
    ctx.stroke();

    ctx.moveTo(15, 100);
    ctx.lineTo(330, 100);
    ctx.fillText(28, 15, 97);

    ctx.moveTo(15, 130);
    ctx.lineTo(330, 130);
    ctx.fillText(27, 15, 125);

    ctx.moveTo(15, 160);
    ctx.lineTo(330, 160);
    ctx.fillText(26, 15, 155);

    ctx.moveTo(15, 140);
    ctx.lineTo(330, 140);
    ctx.fillText(26.5, 9, 139);

    ctx.moveTo(15, 190);
    ctx.lineTo(330, 190);
    ctx.fillText(25, 15, 185);

    ctx.fillText(12.02, 50, 475);
    ctx.fillText(13.02, 110, 475);
    ctx.fillText(14.02, 170, 475);
    ctx.fillText(15.02, 230, 475);
    ctx.fillText(16.02, 290, 475);

    ctx.stroke();
}