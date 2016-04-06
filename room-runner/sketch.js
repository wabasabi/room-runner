function preload() {
  // Level assets
  domeDemoImage = loadImage('assets/DemoSizeBg.png');
  levelOne = loadImage('assets/Enironment1-01.png');
  levelTwo = loadImage('assets/Environment2_small.png');
  levelThree = loadImage('assets/Environment3-01.png');
  currentLevel = 0;

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
  deathAnimation = loadAnimation(
    "assets/TommyDie-03.png",
    "assets/TommyDie-02.png",
    "assets/TommyDie-01.png"
  );


  //Scoreboard assets
  scoreboardImage = loadImage('assets/scoreboard.png');
  healthImage = loadImage('assets/Lives-01.png');
  recycleImage = loadImage('assets/RecycleCollects-01.png');
  equalsImage = loadImage('assets/equals.png');


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

  // Trash Assets
  appleCore = loadImage('assets/AppleCore-01.png');
  bananaPeel = loadImage('assets/BananaPeel-01.png');
  can = loadImage('assets/Can-01.png');
  fishBones = loadImage('assets/FishBones-01.png');
  glassBottle = loadImage('assets/GlassBottle-01.png');
  lightBulb = loadImage('assets/LightBulb-01.png');
  trashBag = loadImage('assets/TrashBag-01.png');
}

function setup() {

  // Initialization
  var width = 0;
  var height = 0;

  // Boolean flags for setup
  dome = true; // Set whether or desktop or dome
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

  // Create structural components
  keyHandler = new KeyHandler();

  // Litterbug
  litterbug = new Litterbug(3.12, 4.67);
  litterbug.setIdleImages(LB_IdleRight, LB_IdleLeft);
  litterbug.setWalkingAnimations(LB_RwalkingAnimation, LB_LwalkingAnimation);

  // Trashcan Tommy
  var StartingX = width / 2 + height / 2;
  var StartingY = height / 2;
  tommy = new Tommy(StartingX, StartingY, 3);
  tommy.setIdleImages(TT_IdleRight, TT_IdleLeft);
  tommy.setWalkingAnimations(RwalkingAnimation, LwalkingAnimation);
  tommy.setDeathAnimation(deathAnimation);

  // Trash Test
  var angle3 = 2.25;
  trash = new Trash(angle3);
  trash.setImage(appleCore);

  var angle4 = 2.98;
  trash2 = new Trash(angle4);
  trash2.setImage(bananaPeel);

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

  //Trash function calls
  trash.checkCollisions(tommy);
  trash2.checkCollisions(tommy);

  //Litterbug function calls
  litterbug.patrol();

  // Handle keys
  keyHandler.handleKeyPress();

  // Draw all sprites
  drawSprites();

}
