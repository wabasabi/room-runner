function setup() {
  //create the display
  var width = 960;
  var height = 600;
  createCanvas(width, height);
  background('#222');  
  
  //create the "room"
  var c = color('#FFF'); //defines color 'c'
  fill(c); //use color variable 'c' as fill color
  ellipse(width/2, height/2, 600, 600);
  
  //declare variables used for circular movement
  constant = 250;
  angle = 0.05;
  scalar = 100;
  speed = 0.05;
}

function draw() {
  //set ellipse placement variables
  var x = constant + sin(angle) * scalar;
  var y = constant + cos(angle) * scalar;
  
  //create the test circle
  var c = color('#0F0');
  fill(c);
  ellipse(x, y, 100, 100);
  
  angle = angle + speed;
}
