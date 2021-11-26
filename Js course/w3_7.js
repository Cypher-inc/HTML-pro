
var image;
var imageGrey;

function upload(){
    var fileinput = document.getElementById("finput")
    // var filename = fileinput.value
    // alert("You Chose: " + filename)

    image = new SimpleImage(fileinput)
    imageGrey = new SimpleImage(fileinput)
    var canvas = document.getElementById("canvas");
    image.drawTo(canvas);
}


function makeGrey(){

    for(var pixel of imageGrey.values()){
        red = pixel.getRed()
        blue = pixel.getBlue()
        green = pixel.getGreen()

        var avg = (red + green + blue)/3

        pixel.setRed(avg)
        pixel.setBlue(avg)
        pixel.setGreen(avg)
    }

    var canvas = document.getElementById("canvas1");
    imageGrey.drawTo(canvas);


}

