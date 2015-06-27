var element = document.querySelector("#greeting");
element.innerText = "";
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

c.onkeydown = myFunction;


var x = 40;
var y = 30;

function myFunction(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        y -= 5;
    }
    else if (e.keyCode == '40') {
        // down arrow
        y += 5;
    }
    else if (e.keyCode == '37') {
       // left arrow
       x -= 5;
    }
    else if (e.keyCode == '39') {
       // right arrow
       x += 5;
    }
    guy();
}

var guy = function() {
 ctx.clearRect(0, 0, c.width, c.height);

ctx.beginPath();
ctx.lineWidth="4";
ctx.strokeStyle="blue";
ctx.rect(x-10,y,50,50);
ctx.stroke();
ctx.fillStyle="blue";
ctx.fill();

ctx.beginPath();
ctx.lineWidth="2";
ctx.strokeStyle="blue";
ctx.rect(x-8,y,10,10);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();

ctx.beginPath();
ctx.lineWidth="2";
ctx.strokeStyle="blue";
ctx.rect(x+27,y,10,10);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();

ctx.beginPath();
ctx.lineWidth="2";
ctx.strokeStyle="blue";
ctx.rect(x-3,y+40,40,10);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();
};

guy();





