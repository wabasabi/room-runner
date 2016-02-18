function setup() {
  //create the display
  var width = 960;
  //var width = 1920;
  var height = 600;
  //var height = 1200;
  createCanvas(width, height);
  background('#222');  
  
  //create the "room"
  var c = color('#FFF'); //defines color 'c'
  fill(c); //use color variable 'c' as fill color
  ellipse(width/2, height/2, height, height);
  
  //declare variables used for circular movement
  testCircleX = width/2;
  testCircleY = height/2;
  angle = 0.05;
  speed = 0.025;
}

function draw() {
  // Draw background to avoid shadows
  var b = color('#000');
  fill(b);
  rect(0,0,width,height);
  
  // Recreate the room to hide shadow of test circle
  var c = color('#FFF'); //defines color 'c'
  fill(c); //use color variable 'c' as fill color
  ellipse(width/2, height/2, 600, 600);
  
  // set up ellipse placement vars for ellipse 1
  var a = testCircleX + cos(angle) * 250;
  var b = testCircleY + sin(angle) * 250;
  
  // create test circle 1
  var g = color('#0A0');
  fill(g);
  ellipse(a, b, 100, 100);

  
  angle = angle + speed;
}
