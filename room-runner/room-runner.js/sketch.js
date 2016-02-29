function preload() {
  // Debug assets
  domeDemoImage = loadImage('assets/DemoSizeBg.png');

  // Test assets
  mushroomIMG = loadImage('assets/mushroom.png');

  // Game assets
  TT_Idle = loadImage('assets/TT_idle-01.png');
  walkingAnimation = loadAnimation(
    "assets/TT_Walk-01.png",
    "assets/TT_Walk-02.png",
    "assets/TT_Walk-03.png",
    "assets/TT_Walk-04.png",
    "assets/TT_Walk-05.png",
    "assets/TT_Walk-06.png"
    );
}

function setup() {

  // Initialization
  var width = 0;
  var height = 0;

  // Boolean flags for setup
  var dome = false; // Set whether or desktop or dome
  debug = true; // Set whether to show debug features(FPS, background, etc.)

  // Display for dome or PC
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

  // Trashcan Tony test NO OO
  tony = createSprite(width/2, height/2, 100, 100);
  tony.addImage(TT_Idle);
  tony.addAnimation(walkingAnimation);

  // Sprite Creation Test
  mushroom = createSprite(width / 2, 20, 64, 64);
  mushroom.addImage(mushroomIMG);

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

  //DEBUG-----------------------------------------------------------
  translate(width/2, height/2);
  rotate(-.25);
  rect((height/2) * cos(0),(height/2) * sin(0), -200, 20);

  //translate((height/2) * cos(0),(height/2) * sin(0));
  rotate(-.25);
  rect((height/2) * cos(0), (height/2) * sin(0), -100, 20);

  rotate(-.25);
  rect((height/2) * cos(0), (height/2) * sin(0), -500, 20);

  rotate(-.25);
  rect((height/2) * cos(0), (height/2) * sin(0), -250, 20);

  rotate(-.25);
  rect((height/2) * cos(0), (height/2) * sin(0), -120, 20);

  rotate(-.75);
  rect((height/2) * cos(0), (height/2) * sin(0), -2800, 20);
  //End DEBUG ------------------------------------------------------

}
