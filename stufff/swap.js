
function swapRedGreen(picture){
    for (var pixel of picture.values()){
       
        green= pixel.getGreen() //255
        red = pixel.getRed()   //0
        pixel.setRed(green)  //255
       
        pixel.setGreen(red)  //0
  
    }
      return result;
}

var img = new SimpleImage("usain.jpg");
print(img.getRed(10,10))
print(img.getGreen(10,10))
print(img)
var result = swapRedGreen(img);

print(img.getRed(10,10))
print(img.getGreen(10,10))
print(img)




function swapRedGreen(picture){
    for (var pixel of picture.values()){
       
    if(pixel.getRed()>0){
        pixel.setRed(255)  //255
       
        pixel.setGreen(255)  //0
        
        pixel.setBlue(255)
        }
        else{
            pixel.setRed(255)  //255
       
        pixel.setGreen(255)  //0
        
        pixel.setBlue(0)
        }
  
    }
      return result;
}

var img = new SimpleImage("duke_blue_devil.png");

print(img)


var result = swapRedGreen(img);


print(img)


//Start with the foreground image you want (fgImage)
var fgImage = new SimpleImage("drewRobert.png");
//... and with the background image you want (bgImage)
var bgImage = new SimpleImage("dinos.png");
//Make a blank image of the same size (output)
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
print(output);
