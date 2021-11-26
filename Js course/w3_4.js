

function doColor() {
    var canvas = document.getElementById("can");
    var colorinput = document.getElementById("clr");
    canvas.style.backgroundColor = colorinput.value;
  }
  

function doSquare() {
    var sliderinput = document.getElementById("slr");
    var len = sliderinput.value;
    var canvas = document.getElementById("can");
    var context = canvas.getContext("2d");
    context.fillStyle = canvas.style.backgroundColor
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillRect(10,10,len,len);
  
  }
  
  
  
  
  
  
  
  
  
  