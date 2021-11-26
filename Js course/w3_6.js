function upload(){
    var fileinput = document.getElementById("finput")
    // var filename = fileinput.value
    // alert("You Chose: " + filename)

    var image = new SimpleImage(fileinput)
    var canvas = document.getElementById("canvas");
    image.drawTo(canvas);
}




// function upload() {
//   //Get input from file input
//   var fileinput = document.getElementById("finput");
//   //Make new SimpleImage from file input
//  var image = new SimpleImage(fileinput);
//   //Get canvas
//   var canvas = document.getElementById("canvas");
//   //Draw image on canvas
//   image.drawTo(canvas);
// }