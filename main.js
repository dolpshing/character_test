var element = document.querySelector("#greeting");
element.innerText = "";
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");


var x = 40;

var guy = function() {

ctx.beginPath();
ctx.lineWidth="4";
ctx.strokeStyle="blue";
ctx.rect(x-10,30,50,50);
ctx.stroke();
ctx.fillStyle="blue";
ctx.fill();

ctx.beginPath();
ctx.lineWidth="2";
ctx.strokeStyle="blue";
ctx.rect(x-8,30,10,10);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();

ctx.beginPath();
ctx.lineWidth="2";
ctx.strokeStyle="blue";
ctx.rect(x+27,30,10,10);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();

ctx.beginPath();
ctx.lineWidth="2";
ctx.strokeStyle="blue";
ctx.rect(x-3,70,40,10);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();
};

guy();

var draw = function() {
  x = x + 10;
};



