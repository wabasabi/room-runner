function preload() {
  // Debug assets
  domeDemoImage = loadImage('assets/DemoSizeBg.png');
  levelOne = loadImage('assets/Enironment1-01.png');
  levelOneSmall = loadImage('assets/Environment1_small.png');
  levelOneSmaller = loadImage('assets/Environment1_smaller.png')

  // Test assets
  mushroomIMG = loadImage('assets/mushroom.png');

  // Tommy assets
  TT_IdleRight = loadImage('assets/TT_idle-01.png');
  TT_IdleLeft = loadImage('assets/TT_idle-02.png');
  RwalkingAnimation = loadAnimation(
    "assets/TT_Walk-01.png",
    "assets/TT_Walk-02.png",
    "assets/TT_Walk-03.png",
    "assets/TT_Walk-04.png",
    "assets/TT_Walk-05.png",
    "assets/TT_Walk-06.png"
  );
  LwalkingAnimation = loadAnimation(
    "assets/TT_Walk-07.png",
    "assets/TT_Walk-08.png",
    "assets/TT_Walk-09.png",
    "assets/TT_Walk-10.png",
    "assets/TT_Walk-11.png",
    "assets/TT_Walk-12.png"
  );

  // Litterbug assets
  LB_IdleRight = loadImage('assets/LB_Idle.png');
  LB_IdleLeft = loadImage('assets/LB_Idle.png');
  LB_RwalkingAnimation = loadAnimation(
    "assets/LB_Walk-02.png",
    "assets/LB_Walk-03.png",
    "assets/LB_Walk-04.png",
    "assets/LB_Walk-05.png",
    "assets/LB_Walk-06.png"
  );
  LB_LwalkingAnimation = loadAnimation(
    "assets/LB_Walk-02.png",
    "assets/LB_Walk-03.png",
    "assets/LB_Walk-04.png",
    "assets/LB_Walk-05.png",
    "assets/LB_Walk-06.png"
  );
}

function setup() {

  // Initialization
  var width = 0;
  var height = 0;

  // Boolean flags for setup
  dome = true; // Set whether or desktop or dome
  debug = false; // Set whether to show debug features(FPS, background, etc.)

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

  // Create structural components
  keyHandler = new KeyHandler();

  // Trashcan Tony
  var StartingX = width / 2 + height / 2;
  var StartingY = height / 2;
  tommy = new Tommy(StartingX, StartingY, 3);
  tommy.setIdleImages(TT_IdleRight, TT_IdleLeft);
  tommy.setWalkingAnimations(RwalkingAnimation, LwalkingAnimation);

  // Litterbug
  litterbug = new Litterbug(3.12, 4.67);
  litterbug.setIdleImages(LB_IdleRight, LB_IdleLeft);
  litterbug.setWalkingAnimations(LB_RwalkingAnimation, LB_LwalkingAnimation);

  // Litterbug2 Test
  Litterbug2 = new Litterbug(4.67, 6);
  Litterbug2.setIdleImages(LB_IdleRight, LB_IdleLeft);
  Litterbug2.setWalkingAnimations(LB_RwalkingAnimation, LB_LwalkingAnimation);

  // Ubiquitous litterbug Test
  testbug = new Litterbug(1, 2);
  testbug.setIdleImages(LB_IdleRight, LB_IdleLeft);
  testbug.setWalkingAnimations(LB_RwalkingAnimation, LB_LwalkingAnimation);

  //mushroom = createSprite(width / 2, 20, 64, 64);
  //mushroom.addImage(mushroomIMG);

}

// Looping draw method, main runner for game
function draw() {

  // Draw background to avoid shadows
  background.draw();

  // Draw the game background
  gameGround.draw();

  // Check against collisions and draw times
  tommy.handleJumping();
  tommy.checkCollisions(litterbug);
  tommy.checkCollisions(Litterbug2);

  // Litterbug function calls
  litterbug.patrol();

  // Litterbug2 function calls
  Litterbug2.patrol();

  testbug.patrol();

  // Handle keys
  keyHandler.handleKeyPress();

  // Draw all sprites
  drawSprites();

}
