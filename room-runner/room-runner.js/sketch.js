function setup() {
  //create the display
  var width = 960;
  //var width = 1920;
  var height = 600;
  //var height = 1200;
  createCanvas(width, height);
  
  // Create objects
  background = new Background();
  gameGround = new GameGround();
  testSphere = new TestSphere(0.09);
  testSphere2 = new TestSphere(0.005);
  testSphere3 = new TestSphere(0.05);
  
  //create the "room"----------------------------------------------
  var c = color('#FFF'); //defines color 'c'
  fill(c); //use color variable 'c' as fill color
  ellipse(width/2, height/2, height, height);
  
}

function draw() {
  // Draw background to avoid shadows
  background.draw();
  
  // Draw the game background
  gameGround.draw();
  
  // Draw the sphere moving clockwise around the gameground
  testSphere.draw();
  testSphere2.draw();
  testSphere3.draw();

  
}

function TestSphere(sphereSpeed) {
  this.centerX = width/2;
  this.centerY = height/2;
  this.angle = 0.05;
  this.speed = sphereSpeed;
  this.sphereColor = color('#0A0');
  this.dimXY = 100;
  this.scalar = height/2 - (this.dimXY/2);
  
  this.draw = function(){
    var x = this.centerX + cos(this.angle) * this.scalar;
    var y = this.centerY + sin(this.angle) * this.scalar;
    fill(this.sphereColor);
    ellipse(x, y, this.dimXY, this.dimXY);
    this.angle = this.angle + this.speed;
  }
}

// Generate the ellipse that will project onto the dome
function GameGround() {
  this.x = 600;
  this.y = 600;
  this.gameGroundColor = color('#FFF');
  
  this.draw = function(){
    fill(this.gameGroundColor);
    ellipse(width/2, height/2, this.x, this.y);
  }
}

// Create a background class so it is easy to change color/add images/etc.
function Background() {
  this.x = 0;
  this.y = 0;
  this.backgroundColor = color('#000');
  
  this.draw = function(){
    fill(this.backgroundColor);
    rect(0,0,width,height);
  }
}
