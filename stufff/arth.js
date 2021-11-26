var x = 3;
var y = 4;
var z = x + 2*y;

console.log("Addition is ",z)


var x = 3;
var y = 2;
y = x;
console.log("Value of x: ",x);
console.log("Value of y: ",y);

// var image = new SimpleImage('pixels.jpeg');


function asdf(a){
 var m = a*a;
 return m;
}

m = asdf(5);
console.log("Value of m is ",m)


// console.log("Test")


function phrase3words(value1, value2, value3) {
    var answer = value1 +" " + value2 + " " + value3;  
    return answer;
}

var result1 = phrase3words("smile","at","everyone");
console.log(result1);
var result2 = phrase3words("everyone","wave", "back");
console.log(result2);
var result3 = phrase3words("coding","is", "fun");
console.log(result3);



function reformatName(last,first) {
    return (last+", "+first)
}

var result = reformatName("Susan", "Rodger");
console.log(result);
result = reformatName("Robert", "Duvall");
console.log(result);


// write your code here
function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight(); 
    var width = someImg.getWidth(); 
    return height*width;
}

var result = numberPixels("chapel.png");
print(result);
result = numberPixels("dinos.png");
print(result);


function perimeter(imageName) {
    var someImg = new SimpleImage(imageName);
    var height = someImg.getHeight(); 
    var width = someImg.getWidth(); 
    return 2*height + 2*width;
}

print(perimeter("rodger.png"));



function printPixel(nameImage, xpos, ypos) {
    var someImg = new SimpleImage(nameImage);
    var red = someImg.getRed(xpos, ypos); 
    var blue = someImg.getBlue(xpos, ypos); 
    var green = someImg.getGreen(xpos, ypos); 

    return { red,
        green,
        blue
    };

}


drew1 = printPixel("drewgreen.png",10, 10);
drewred = drew1.red
print("Red ",drewred)
drewgreen = drew1.green
print("Green ",drewgreen)
drewblue = drew1.blue
print("Blue ",drewblue)
// print(drew1.red,drew1.blue,drew1.green)


drew2 = printPixel("drewgreen.png",250, 500);
drewred = drew2.red
print("Red ",drewred)
drewgreen = drew2.green
print("Green ",drewgreen)
drewblue = drew2.blue
print("Blue ",drewblue)


function printPixel(nameImage, xpos, ypos) {
    var someImg = new SimpleImage(nameImage);
    var red = someImg.getRed(xpos, ypos); 
    var blue = someImg.getBlue(xpos, ypos); 
    var green = someImg.getGreen(xpos, ypos); 

    return { red,
        green,
        blue
    };

}


drew1 = printPixel("drewgreen.png",10, 10);
drewred = drew1.red
// print("Red ",drewred)
drewgreen = drew1.green
// print("Green ",drewgreen)
drewblue = drew1.blue
print("Add: ",drewred+drewblue+drewgreen)
// print(drew1.red,drew1.blue,drew1.green)


drew2 = printPixel("drewgreen.png",250, 500);
drewred = drew2.red
// print("Red ",drewred)
drewgreen = drew2.green
// print("Green ",drewgreen)
drewblue = drew2.blue
print("Add: ",drewred+drewblue+drewgreen)

""
var img = new SimpleImage("chapel.png");
for (var pixel of img.values()){
    if(pixel.getX()>=img.getWidth()/2){
        pixel.setRed(255)
    }
    else{
        continue;
    }
}


var img = new SimpleImage("astrachan.jpg");
for (var pixel of img.values()){
    if(pixel.getY() >= 350){
        pixel.setRed(0)
        pixel.setGreen(0)
        pixel.setBlue(0)
    }
    else{
        continue;
    }
}

print(img)

var img = new SimpleImage("chapel.png");
for (var pixel of img.values()){
    if(pixel.getY() <=img.getHeight()-270){
        pixel.setGreen(255);
    }
    else{
        continue;
    }
}

for (var pixel of img.values()){
    if(pixel.getX()<= img.getWidth()-200){
        pixel.setGreen(255);
    }
    else{
        continue;
    }
}
print(img)
print(img.getHeight())
print(img.getWidth())



var img = new SimpleImage("chapel.png");

for (var pixel of img.values()){
    if(pixel.getX()>=50){
          pixel.setGreen(255);
    }
    else{
     continue;
        
    }
}

for (var pixel of img.values()){
    if(pixel.getY()>= 50){
        pixel.setGreen(255);
     
    }
    else{
     continue;
        
    }
}

print(img)
print(img.getHeight())
print(img.getWidth())



var img = new SimpleImage("chapel.png");


for (var pixel of img.values()){
    if(pixel.getX()<=50 && pixel.getY() <=50 ){
       
           pixel.setGreen(255);
    }
    else{
 
  
    }
}


print(img)
print(img.getHeight())
print(img.getWidth())


// write your code here

var img = new SimpleImage("chapel.png");


for (var pixel of img.values()){
    if(pixel.getX()>=180 && pixel.getY() <=50 ){
       
           pixel.setGreen(255);
    }
    else{
 
  
    }
}


print(img)
print(img.getHeight())
print(img.getWidth())

// write your code here


function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;
  
       for(var pixel of picture.values()){
     
        pixel.setRed(red);
     
           if( pixel.getX() < 255){
           
             red++;
           }
             else{
                red=0;
             }
       }
             print(picture.getWidth())
     return picture;

}


var result = changeRed(256,200);
print(result);


// write your code here


function changeRed(width, height,green,blue) {
    var picture = new SimpleImage(width, height);
    var red = 0;
  
       for(var pixel of picture.values()){
     
        pixel.setRed(red);
     pixel.setGreen(green);
     pixel.setBlue(blue);
           if( pixel.getX() < 255){
           
             red++;
           }
             else{
                red=0;
             }
       }
             print(picture.getWidth())
     return picture;

}


var result = changeRed(256,200,200,100);
print(result);
