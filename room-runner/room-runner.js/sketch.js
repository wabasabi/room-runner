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
  kbTest = new TestKeyboardSphere(0.17, 0);
  
}

// Looping draw method, main runner for game
function draw() {
  
  // Draw background to avoid shadows
  background.draw();
  
  // Draw the game background
  gameGround.draw();
  
  // Draw the sphere moving clockwise around the gameground
  kbTest.draw();

  
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
    kbTest.moveRight(); 
  }
 
  // LEFT key
  if(keyCode == LEFT_ARROW)
  {
    kbTest.moveLeft();
  }
}
