/**
 * Created by Tea on 7/21/2016.
 */
"use strict";
function init(){
    window.requestAnimationFrame(draw);
}
function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0,0,300,300);
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.strokeStyle = 'rgba(0,153,255,0.4)';
    ctx.save();
    ctx.translate(150,150);
    var time = new Date();
    ctx.rotate( (((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds()));
    ctx.beginPath();
    ctx.arc(100, 100, 35, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    var time = new Date();
    ctx.rotate( (((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds())*20);
    ctx.beginPath();
    ctx.translate(0,0);
    ctx.arc(60, 60, 15, 0, 2*Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    var time = new Date();
    ctx.rotate( (((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds())*10);
    ctx.beginPath();
    ctx.translate(0,0);
    ctx.arc(40, 40, 5, 0, 2*Math.PI);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    ctx.beginPath();
    ctx.arc(150, 150, 35, 0, 2*Math.PI); // center planet
    ctx.fillStyle = "black";
    ctx.fill();
    window.requestAnimationFrame(draw);
}
init();