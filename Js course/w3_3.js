

function changeColor(){
    var cc1 = document.getElementById('d1')
    var cc2 = document.getElementById('d2')

    var cc3 = document.getElementById('d1')
    var cc4 = document.getElementById('d2')

    cc1.className = 'salmonback';
    cc2.className = 'blueback';

    cc1.innerHTML = 'salmonback';
    cc2.innerHTML = 'blueback';
}

function doRed(){
    var dd1 = document.getElementById("d1")
    dd1.style.backgroundColor="white";
    var ctx = dd1.getContext("2d");
    ctx.fillStyle="red";
    ctx.fillRect(125,10,50,50);
    ctx.font = "30px Arial";
    ctx.fillText ("MONKE", 10, 50);
}


function doBlue(){
    var dd1 = document.getElementById("d2")
    dd1.style.backgroundColor="white";
    var ctx = dd1.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(10,10,50,50);
    ctx.font = "30px Arial";
    ctx.fillText ("BIG CHUNGUS",10,50)

}

