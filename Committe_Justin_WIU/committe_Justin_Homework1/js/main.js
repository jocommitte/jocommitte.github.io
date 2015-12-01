/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */
$(document).ready(function(){
  

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle="blue";
    ctx.fillRect(0,0,50,100);
    ctx.strokeStyle="black";
    ctx.strokeRect(0,0,50,100);

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
    var cir = document.getElementById("myCircle");
    var ctr = cir.getContext("2d");
    ctr.beginPath();
    ctr.arc(50,50,30,0, Math.PI*2, true);
    ctr.stroke();
    ctr.closePath();
    ctr.beginPath();
    ctr.fillStyle = "rgba(255, 65, 0, .5)"
    ctr.arc(50, 50, 20, 0, Math.PI*2, true); 
    ctr.closePath();

    ctr.fill();




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
     var canvas = document.getElementById("myStar");
     var ctx = canvas.getContext("2d");
    canvas.style.border = "solid red 1px";
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(107.8, 0.0);
    ctx.lineTo(141.2, 67.5);
    ctx.lineTo(215.7, 78.3);
    ctx.lineTo(161.8, 130.9);
    ctx.lineTo(174.5, 205.1);
    ctx.lineTo(107.8, 170.1);
    ctx.lineTo(41.2, 205.1);
    ctx.lineTo(53.9, 130.9);
    ctx.lineTo(0, 78.3);
    ctx.lineTo(74.5, 67.5);
    ctx.lineTo(107.8, 0.0);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    
/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
var canvas = document.getElementById('myBrella');
      var context = canvas.getContext('2d');
      var x = canvas.width / 2;
      var y = canvas.height;
      var radius = 75;
      var startAngle = 1.1 * Math.PI;
      var endAngle = 1.9 * Math.PI;
      var counterClockwise = false;

      context.beginPath();
      context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      context.lineWidth = 15;
      context.moveTo(79, 125);
      context.bezierCurveTo(90, 115, 100, 110, 110, 125);
      context.bezierCurveTo(120,115,130,110,140,125);
      context.bezierCurveTo(150,115,160,110,170,125);
      context.bezierCurveTo(180,115,190,110,200,125);
      context.bezierCurveTo(205,115,215,110,220,125);

      context.lineWidth = 4;
    // line color
      context.strokeStyle = 'black';
      context.stroke();
    
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
    var canvas = document.getElementById('myText');
      var context = canvas.getContext('2d');

      context.font = '30pt Lucida Sans Unicode';
      context.fillText('PAGNATIOUS', 0, 140);
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
      var imagine = document.getElementById('myImage').getContext('2d');

        var img = new Image;
        img.src = "image/logo.png";
        img.onload = function() {
            imagine.drawImage(img, 20,20);
            alert('the image is drawn');

        }
        img.src = "image/logo.png";
        img.style.width = '100px';


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

});
