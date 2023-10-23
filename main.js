var lastPositionX, lastPositionY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
widthLine = 1;
var width = screen.width;
newWidth = screen.width-70;
newHeight = screen.height-300;
if (width<992){
    canvas.width = newWidth;
    canvas.height = newHeight;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", myTouchStart)
function myTouchStart(e)
{
    color = document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;

    lastPositionX = e.touches[0].clientX-canvas.offsetLeft;
    lastPositionY = e.touches[0].clientY-canvas.offsetTop;
    
}
    canvas.addEventListener("touchmove", myTouchMove);
    function myTouchMove(e)
{

    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthLine;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + lastPositionX + "y = " + lastPositionY);
    ctx.moveTo(lastPositionX, lastPositionY);

    console.log("Current position of x and y coordinates = ");
    console.log("x = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionX = currentPositionOfTouchX;
    lastPositionY = currentPositionOfTouchY;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}