/*
function preload() {
  mushroomIMG = loadImage('assets/mushroom.png');
}
*/

function setup() {

  // Initialization
  var width = 0;
  var height = 0;

  // Set whether or desktop or dome
  var dome = false;
  if (dome) {
    width = 1920;
    height = 1200;
  } else {
    width = 960;
    height = 600;
  }

  // General attributes
  createCanvas(width, height);
  frameRate(60);

  // Create objects
  background = new Background();
  gameGround = new GameGround();
  kbTest = new TestKeyboardSphere(0.17, 0);

  // Sprite Creation Test
  //mushroom = createSprite(width / 2, 20, 64, 64);
  //mushroom.addImage(mushroomIMG);
}

// Looping draw method, main runner for game
function draw() {

  // Draw background to avoid shadows
  background.draw();

  // Draw the game background
  gameGround.draw();

  // Draw the sphere moving clockwise around the gameground
  kbTest.draw();

  // Write keyboardhandler object to abstract and simplify this
  if (keyWentDown(UP_ARROW)) {
    if (!kbTest.isJumping) {
      kbTest.jump();
    }
  }

  if (keyDown(RIGHT_ARROW)) {
    kbTest.moveRight();
  }

  if (keyDown(LEFT_ARROW)) {
    kbTest.moveLeft();
  }

  drawSprites();

}
