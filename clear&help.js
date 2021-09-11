let clear = document.querySelector(".clear");
let help = document.querySelector(".help");

clear.addEventListener("click", function () {
    canvas.remove();
    container.innerHTML = ` <canvas class="canvas" style="background-color: white;"></canvas>`;
    alert("Content will get cleared");
});

help.addEventListener("click", function () {
    alert(`USER MANUAL
    . No Data Persistance therefore recommended to download your
      work before clear
    . Click on photo icon to add images
    . Click on notes icon to add stick notes in YG-WhiteBoard
    . Click on add button at the bottom most to add new whiteboard
      sheet`);
});

