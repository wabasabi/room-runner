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
  dome = false; // Set whether or desktop or dome
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

  // Trashcan Tony
  var StartingX = width / 2 + height / 2;
  var StartingY = height / 2;
  tommy = new Tommy(StartingX, StartingY);
  tommy.setWalkingRightAnimation(walkingAnimation);

  //mushroom = createSprite(width / 2, 20, 64, 64);
  //mushroom.addImage(mushroomIMG);

  //listOfColliders = [sprite];
  listOfColliders = [];
}

// Looping draw method, main runner for game
function draw() {

  // Draw background to avoid shadows
  background.draw();

  // Draw the game background
  gameGround.draw();

  // Check against collisions
  tommy.checkCollisions(listOfColliders);

  // Handle keys
  keyHandler.handleKeyPress();

  // Draw all sprites
  drawSprites();

}
