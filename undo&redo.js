let redo = document.querySelector(".redo");
let undo = document.querySelector(".undo");
let lastLine;

redo.addEventListener("click", function(){
        let l = redoLines.pop();
        if(l)db.push(l);
        drawLine(l);
});

undo.addEventListener("click", function(){

    lastLine = db.pop();
    if(lastLine)
    redoLines.push(lastLine);
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    console.log(db.length);
    for(let i=0; i<db.length; i++){
        drawLine(db[i]);
    }
});

function drawLine(linetodraw){
    for(let j=0; linetodraw && j<linetodraw.length; j++){
        if(linetodraw[j].type == "md"){
            ctx.lineWidth = linetodraw[j].width + "px";
            ctx.strokeStyle = linetodraw[j].color;

            ctx.beginPath();
            ctx.moveTo(linetodraw[j].x, linetodraw[j].y);
        }else{
            ctx.lineWidth = linetodraw[j].width + "px";
            ctx.strokeStyle = linetodraw[j].color;

            ctx.lineTo(Number(linetodraw[j].x), Number(linetodraw[j].y));
            ctx.stroke();
        }
    }
}