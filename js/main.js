var c = document.createElement("canvas");
var ctx = c.getContext("2d");
c.width = 500;
c.height = 350;
document.body.appendChild(c);

var perm = [];
while (perm.length < 255){
    while(perm.includes(val = Math.floor(Math.random()*255)));
}

var noise = x=>{
    return
}

function loop(){
    ctx.fillstyle = "#19f";
    ctx.fillRect(0,0,c.width, c.height);

    requestAnimationFrame(loop);
}

loop();