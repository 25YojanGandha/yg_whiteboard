let canvas = document.querySelector(".canvas");
let container = document.querySelector(".canvascontainer");

canvas.width = container.clientWidth-5;
canvas.height = container.clientHeight-5;

let ctx = canvas.getContext("2d");
let penselected = true;
let pendown = false;

canvas.addEventListener("mousedown", function(e){
    pendown = true;
    let x = e.clientX;
    let y = e.clientY;
    ctx.beginPath();
    ctx.moveTo(x,y);
});

canvas.addEventListener("mousemove", function(e){
   if(pendown){
        let x = e.clientX - 55.2;
        let y = e.clientY - 3*33.6;
        ctx.lineTo(x,y);
        ctx.stroke();
   }
});

canvas.addEventListener("mouseup", function(){
    pendown = false;
});