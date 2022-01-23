/**@type {HTMLCanvasElement} */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// var color = ["blue", "yellow", "black", "green","red"];
color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.rect(150,143,430,200);
ctx.stroke();

// drawing circles

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 3;
ctx.arc(290,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.arc(340,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.arc(440,210,40,0,2*Math.PI);
ctx.stroke();