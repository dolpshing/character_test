var element = document.querySelector("#greeting");
element.innerText = "";
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.lineWidth="4";
ctx.strokeStyle="blue";
ctx.rect(30,30,50,50);
ctx.stroke();
ctx.fillStyle="blue";
ctx.fill();

ctx.beginPath();
ctx.lineWidth="2";
ctx.strokeStyle="blue";
ctx.rect(32,30,10,10);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();

ctx.beginPath();
ctx.lineWidth="2";
ctx.strokeStyle="blue";
ctx.rect(67,30,10,10);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();

ctx.beginPath();
ctx.lineWidth="2";
ctx.strokeStyle="blue";
ctx.rect(37,70,40,10);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();