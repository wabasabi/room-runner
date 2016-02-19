function setup() {
  
  // Initialization
  var width = 0;
  var height = 0;
  
  // Set whether or desktop or dome
  var dome = false;
  if(dome){
    width = 1920;
    height = 1200;
  } else {
    width = 960;
    height = 600;
  }
  
  // General attributes
  createCanvas(width, height);
  frameRate(120);
  
  // TESTING KEYBOARD INPUT-----------------------------------
  // x position variable
  xpos = 200;
  // y position variable
  ypos = 100;
  // numPixels variable
   numPixels = 3;
  
  // Create objects
  background = new Background();
  gameGround = new GameGround();
  testSphere = new TestSphere(0.09, 0.05);
  testSphere2 = new TestSphere(0.005, 0.05);
  testSphere3 = new TestSphere(0.05, 0.05);
  testSphere4 = new TestSphere(0.17, 0);
  
}

// Looping draw method, main runner for game
function draw() {
  
  // Draw background to avoid shadows
  background.draw();
  
  // Draw the game background
  gameGround.draw();
  
  // Draw the sphere moving clockwise around the gameground
  testSphere.draw();
  testSphere2.draw();
  testSphere3.draw();
  testSphere4.draw();
  print(testSphere.angle);

  
}

// This returns a location on the sphere
// @param location - 0 through 365 position on sphere
// @return - location on sphere
function getLocation(location){
  return 0.017 * location;
}

function keyPressed()
{
  // RIGHT key
  if(keyCode == RIGHT_ARROW)
  {
    xpos = xpos + numPixels; 
  }
 
  // LEFT key
  if(keyCode == LEFT_ARROW)
  {
    xpos = xpos - numPixels; 
  }
}

// Test sphere that moves around on its own
function TestSphere(sphereSpeed, startAngle) {
  this.centerX = width/2;
  this.centerY = height/2;
  this.angle = startAngle;
  this.speed = sphereSpeed;
  this.sphereColor = color('#0A0');
  this.dimXY = height/6;
  this.scalar = height/2 - (this.dimXY/2);
  
  this.draw = function(){
    var x = this.centerX + cos(this.angle) * this.scalar;
    var y = this.centerY + sin(this.angle) * this.scalar;
    fill(this.sphereColor);
    ellipse(x, y, this.dimXY, this.dimXY);
    this.angle = this.angle + this.speed;
  }
  
  this.drawStatic = function(){
    var x = this.centerX + cos(this.angle) * this.scalar;
    var y = this.centerY + sin(this.angle) * this.scalar;
    fill(this.sphereColor);
    ellipse(x, y, this.dimXY, this.dimXY);
  }
}
