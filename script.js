let canvas = document.querySelector(".canvas");
let container = document.querySelector(".canvascontainer");
let pencil = document.querySelector(".pencil");
let eraser = document.querySelector(".eraser");

canvas.width = container.clientWidth-5;
canvas.height = container.clientHeight-5;

let ctx = canvas.getContext("2d");
let pendown = false;
let eraserdown = false;

// DATABASE CREATION
let db = [];
let line = [];
let redoLines = [];

canvas.addEventListener("mousedown", function(e){
    pendown = true;
    let x = e.clientX - 55.2;
    let y = e.clientY - 3*33.6;

    let color = ctx.strokeStyle;
    let width = ctx.lineWidth;

    ctx.beginPath();
    ctx.moveTo(x,y);

    let object = {
        type: "md",
        "x": x,
        "y": y,
        "width": width,
        "color": color
    }

    line.push(object);

});

canvas.addEventListener("mousemove", function(e){
   if(pendown){
        let x = e.clientX - 55.2;
        let y = e.clientY - 3*33.6;

        let color = ctx.strokeStyle;
        let width = ctx.lineWidth;

        ctx.lineTo(x,y);
        ctx.stroke();

        let object = {
            "type": "mm",
            "x": x,
            "y": y,
            "width": width,
            "color": color
        }
    
        line.push(object);
   }
});

canvas.addEventListener("mouseup", function(){
    pendown = false;
    db.push(line);
    line = [];
});

// Pencil Clicked
pencil.addEventListener("click", function(e){
    let selected = pencil.classList.contains("tool-selected");

    if(selected){
        pencil.append(div);
    }else{   
        ctx.strokeStyle = "black";
        pencil.classList.add("tool-selected");
        eraser.classList.remove("tool-selected");
    }   

    let  div = document.createElement("div");
    div.innerHTML = ``
   
});

// Eraser Clicked
eraser.addEventListener("click", function(){
    let selected = eraser.classList.contains("tool-selected");
    if(selected){
        eraser.classList.remove("tool-selected");
        ctx.strokeStyle = "black";
        pencil.classList.add("tool-selected");
    }else {
        pencil.classList.remove("tool-selected");
        eraser.classList.add("tool-selected");
 
        ctx.strokeStyle = "white";
    }
});
