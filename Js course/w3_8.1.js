
var fgImage = null;
var bgImage = null;
var canvas;
var canvas1;

function loadForegroundImage(){
    var fileinput = document.getElementById("finput")
    fgImage = new SimpleImage(fileinput)


    var canvas = document.getElementById("canvas");
    fgImage.drawTo(canvas);


}



function loadBackgroundImage(){
    var fileinput = document.getElementById("finput1")
    bgImage = new SimpleImage(fileinput)


    var canvas1 = document.getElementById("canvas1");
    bgImage.drawTo(canvas1);

}



function doGreenScreen(){
    //clear Canvas
    // clearCanvas()


// if(fgImage==null || fgImage.complete()){
//     alert("foreground image NOT loaded");
//     return;
// }

// if(bgImage==null || bgImage.complete()){
//     alert("Background image NOT loaded");
// }


var output  = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

//write code for each of these steps:
//For each pixel (currentPixel) in fgImage 
for (var pixel of fgImage.values()) {
    //Look at currentPixel and if it is green, 
    if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
        //Look at same position in bgImage
   
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x, y);
        //and set output's corresponding pixel to bgImage's pixel
        output.setPixel(x, y, bgPixel);
        
    }
    //Otherwise: set output's corresponding pixel to currentPixel
    else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel);
    }    
}
//show our answer!

clearCanvas();

        

     canvas1 = document.getElementById("canvas1");
    //  var ctx = canvas1.getContext("2d");
    //  ctx.fillStyle = "#FF0000";
    //  ctx.fillRect(0,0,150,75);
    output.drawTo(canvas1);
    
   
    alert("Greenscreen Apllied!");
}


function clearCanvas(){
    canvas = document.getElementById("canvas");
    var canvas1 = document.getElementById("canvas1");

    var ctx = canvas.getContext("2d");
    var ctx1 = canvas1.getContext("2d");

    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx1.clearRect(0,0,canvas1.width, canvas1.height);

}


