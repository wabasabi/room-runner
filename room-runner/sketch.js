function preload() {
  // Level assets
  domeDemoImage = loadImage('assets/DemoSizeBg.png');
  loadingScreen = loadImage('assets/Logo-01.png');
  levelOne = loadImage('assets/Enironment1-01.png');
  levelTwo = loadImage('assets/Environment2_small.png');
  levelThree = loadImage('assets/Environment3-01.png');
  currentLevel = 0;

  // Tommy assets
  TT_IdleRight = loadImage('assets/TT_idle-01.png');
  TT_IdleLeft = loadImage('assets/TT_idle-02.png');
  RwalkingAnimation = loadAnimation(
    // First Image
    "assets/TT_Walk-01.png",
    "assets/TT_Walk-01.png",
    // Second Image
    "assets/TT_Walk-02.png",
    "assets/TT_Walk-02.png",
    // Third Image
    "assets/TT_Walk-03.png",
    "assets/TT_Walk-03.png",
    // Fourth Image
    "assets/TT_Walk-04.png",
    "assets/TT_Walk-04.png",
    // Fifth Image
    "assets/TT_Walk-05.png",
    "assets/TT_Walk-05.png",
    // Sixth Image
    "assets/TT_Walk-06.png",
    "assets/TT_Walk-06.png"
  );
  LwalkingAnimation = loadAnimation(
    // First Image
    "assets/TT_Walk-07.png",
    "assets/TT_Walk-07.png",
    // Second Image
    "assets/TT_Walk-08.png",
    "assets/TT_Walk-08.png",
    // Third Image
    "assets/TT_Walk-09.png",
    "assets/TT_Walk-09.png",
    // Fourth Image
    "assets/TT_Walk-10.png",
    "assets/TT_Walk-10.png",
    // Fifth Image
    "assets/TT_Walk-11.png",
    "assets/TT_Walk-11.png",
    // Sixth Image
    "assets/TT_Walk-12.png",
    "assets/TT_Walk-12.png"
  );
  deathAnimation = loadAnimation(
    "assets/TommyDie-03.png",
    "assets/TommyDie-02.png",
    "assets/TommyDie-01.png"
  );
  attack1 = loadImage('assets/Attack-01.png');
  attack2 = loadImage('assets/Attack-02.png');
  attack3 = loadImage('assets/Attack-03.png');
  attackAnimation1 = loadAnimation(
    // First Image
    'assets/Character_Attack-01.png',
    'assets/Character_Attack-01.png',
    // Second Image
    'assets/Character_Attack-02.png',
    'assets/Character_Attack-02.png',
    // Third Image
    'assets/Character_Attack-03.png',
    'assets/Character_Attack-03.png'
  )
  attackAnimation2 = loadAnimation(
    // First Image
    'assets/Character_Attack-04.png',
    'assets/Character_Attack-04.png',
    // Second Image
    'assets/Character_Attack-05.png',
    'assets/Character_Attack-05.png',
    // Third Image
    'assets/Character_Attack-06.png',
    'assets/Character_Attack-06.png'
  )


  //Scoreboard assets
  scoreboardImage = loadImage('assets/scoreboard.png');
  healthImage = loadImage('assets/Lives-01.png');
  recycleImage = loadImage('assets/RecycleCollects-01.png');
  equalsImage = loadImage('assets/equals.png');


  // Litterbug assets
  LB_IdleRight = loadImage('assets/LB_Idle.png');
  LB_IdleLeft = loadImage('assets/LB_Idle.png');
  LB_RwalkingAnimation = loadAnimation(
    // First Image
    "assets/LB_Walk-02.png",
    "assets/LB_Walk-02.png",
    // Second Image
    "assets/LB_Walk-03.png",
    "assets/LB_Walk-03.png",
    // Third Image
    "assets/LB_Walk-04.png",
    "assets/LB_Walk-04.png",
    // Fourth Image
    "assets/LB_Walk-05.png",
    "assets/LB_Walk-05.png",
    // Fifth Image
    "assets/LB_Walk-06.png",
    "assets/LB_Walk-06.png"
  );
  LB_LwalkingAnimation = loadAnimation(
    // First Image
    "assets/LB_Walk-02.png",
    "assets/LB_Walk-02.png",
    // Second Image
    "assets/LB_Walk-03.png",
    "assets/LB_Walk-03.png",
    // Third Image
    "assets/LB_Walk-04.png",
    "assets/LB_Walk-04.png",
    // Fourth Image
    "assets/LB_Walk-05.png",
    "assets/LB_Walk-05.png",
    // Fifth Image
    "assets/LB_Walk-06.png",
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

  // Trashcan Assets
  trashcanImage = loadImage('assets/TrashCan.png');

  // Sound assets
  punch = loadSound('assets/punch.mp3');
  pickup = loadSound('assets/pickup.mp3');
  jump = loadSound('assets/jump.mp3');
  changeLevel = loadSound('assets/level-change.mp3');
  death = loadSound('assets/death.mp3');
  cityNight = loadSound('assets/city-noise.mp3');
  cityDay = loadSound('assets/city-background.mp3');
  litterbugDeath = loadSound('assets/litterbug-death.mp3');
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

  //handles level changes
  init = 1;

  // General attributes
  createCanvas(width, height);
  frameRate(60);

  // Create objects
  background = new Background();
  gameGround = new GameGround();

  // Create structural components
  keyHandler = new KeyHandler();

  // Trashcan Test
  var angle5 = 4.11;
  trashcanL1 = new Trashcan(angle5, 140);
  trashcanL1.setImage(trashcanImage);

  // Heart Level 1
  var angle6 = 5.12;
  heart1 = new Heart(angle5, 140);
  heart1.setImage(healthImage);

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
  tommy.setAttackAnimation(attackAnimation1, attackAnimation2);

  // Trash Tests
  var angle3 = 2.25;
  trash = new Trash(angle3);
  trash.setImage(appleCore);

  var angle4 = 2.98;
  trash2 = new Trash(angle4);
  trash2.setImage(bananaPeel);

  var angle6 = 3.55;
  trash3 = new Trash(angle6);
  trash3.setImage(glassBottle);

  var angle7 = 5.89;
  trash4 = new Trash(angle7);
  trash4.setImage(fishBones);

  // Load screen elements
  fadeValue = 0;

  // city audio
  cityDay.setVolume(1);
  cityNight.setVolume(1);
  punch.setVolume(1);
  pickup.setVolume(1);
  jump.setVolume(1);
  changeLevel.setVolume(1);
  death.setVolume(1);
  litterbugDeath.setVolume(1);
  counter = 1;
}

// Looping draw method, main runner for game
function draw() {

  // Game is over
  if (currentLevel == 4) {
    background.draw();
    // Spacebar refresh page IDEA
    return;
  }

  if (currentLevel == 0) {
    // Show splash screen
    keyHandler.endSplashScreen();

    background.draw();

    // Reset fade value
    if (debug) {
      fadeValue = 255;
    } else {
      fadeValue = 0;
    }

    // Draw Logo
    rotate(-1.55);
    image(loadingScreen,
      width / 2 - 1800,
      height / 2 + 500,
      600, 300);
    rotate(1.55);

  } else if (currentLevel == 0.5) {

    // Draw background to avoid shadows
    background.draw();

    // Draw first level image
    tint(255, fadeValue);
    image(levelOne, (width / 2) - (height / 2), 0, height, height);
    fadeValue++;

    keyHandler.endFadeScreen();

  } else if (currentLevel == 1) {
    /**
     * This is the start of level 1 draw frames
     **/

    // Draw background to avoid shadows
    background.draw();

    if (cityNight.isPlaying() == false) {
      cityNight.play();
    }

    // Draw the game background
    gameGround.draw();

    //Litterbug function calls
    if (litterbug.health != 0) {
      litterbug.patrol();
    } else if (litterbug.health == 0) {
      counter++;
    }
    if (counter == 2) {
      litterbugDeath.play();
      counter++;
    }

    // Check against collisions and draw times
    tommy.handleJumping();
    if (litterbug.health > 0) {
      tommy.checkCollisions(litterbug);
    }

    //Trash function calls
    trash.checkCollisions(tommy);
    trash2.checkCollisions(tommy);
    trash3.checkCollisions(tommy);
    trash4.checkCollisions(tommy);
    trashcanL1.checkCollisions(tommy);
    heart1.checkCollisions(tommy);

    // Handle keys
    keyHandler.handleKeyPress();

    // handle Melee
    tommy.handleMelee();

    // Draw all sprites
    drawSprites();
  } else if (currentLevel == 2) {
    if (init == 1) {

      /**
       * Level 2 re-setup for level 2
       **/

      // Remove sprites
      trash.trash.remove();
      trash2.trash.remove();
      trash3.trash.remove();
      trash4.trash.remove();
      trashcanL1.trash.remove();
      heart1.trash.remove();
      litterbug.litterbug.remove();
      litterbug = null;

      trash = new Trash(4.25);
      trash.setImage(lightBulb);

      trash2 = new Trash(3.33);
      trash2.setImage(fishBones);

      trash3 = new Trash(2.24);
      trash3.setImage(glassBottle);

      trash4 = new Trash(1.11);
      trash4.setImage(can);

      trashcanL1 = new Trashcan(2.79, 65);
      trashcanL1.setImage(trashcanImage);

      heart1 = new Heart(2.79, 65);
      heart1.setImage(healthImage);

      // Litterbug
      litterbug2 = new Litterbug(1.60, 2.60);
      litterbug2.setIdleImages(LB_IdleRight, LB_IdleLeft);
      litterbug2.setWalkingAnimations(LB_RwalkingAnimation, LB_LwalkingAnimation);

      // Litterbug
      litterbug3 = new Litterbug(2.5, 4.00);
      litterbug3.setIdleImages(LB_IdleRight, LB_IdleLeft);
      litterbug3.setWalkingAnimations(LB_RwalkingAnimation, LB_LwalkingAnimation);

      // Try re-initializing only tommy's Sprite
      var oldRotation = tommy.tommy.rotation;
      tommy.tommy.remove();
      tommy.tommy = createSprite(width / 2 + height / 2,
        tommy.tommyXYDIM, tommy.tommyXYDIM);
      tommy.tommy.rotation = oldRotation;
      tommy.setIdleImages(TT_IdleRight, TT_IdleLeft);
      tommy.setWalkingAnimations(RwalkingAnimation, LwalkingAnimation);
      tommy.setDeathAnimation(deathAnimation);
      tommy.setAttackAnimation(attackAnimation1, attackAnimation2);

      print(litterbug2);
      print(litterbug3);

      init++;
    }

    /**
     * This is the start of level 2 draw frames
     **/

    // Draw background to avoid shadows
    background.draw();

    if (cityDay.isPlaying() == false) {
      cityNight.pause();
      cityDay.play();
    }

    // Draw the game background
    gameGround.draw();

    //Litterbug function calls
    if (litterbug2.health != 0) {
      litterbug2.patrol();
    } else if (litterbug2.health == 0) {
      counter++;
    }
    if (counter == 2) {
      litterbugDeath.play();
      counter--;
    }

    //Litterbug2 function calls
    if (litterbug3.health != 0) {
      litterbug3.patrol();
    } else if (litterbug3.health == 0) {
      counter++;
    }
    if (counter == 2) {
      litterbugDeath.play();
      counter--;
    }

    // Check against collisions and draw times
    tommy.handleJumping();
    if (litterbug2.health > 0) {
      tommy.checkCollisions(litterbug2);
    }
    if (litterbug3.health > 0) {
      tommy.checkCollisions(litterbug3);
    }

    //Trash function calls
    trash.checkCollisions(tommy);
    trash2.checkCollisions(tommy);
    trash3.checkCollisions(tommy);
    trash4.checkCollisions(tommy);
    trashcanL1.checkCollisions(tommy);
    heart1.checkCollisions(tommy);

    // Handle keys
    keyHandler.handleKeyPress();

    // handle Melee
    tommy.handleMelee();

    // Draw all sprites
    drawSprites();

  } else if (currentLevel == 3) {

    if (init == 2) {

      /**
       * Level 3 re-setup for level 3
       **/

      // Remove sprites
      trash.trash.remove();
      trash2.trash.remove();
      trash3.trash.remove();
      trash4.trash.remove();
      trashcanL1.trash.remove();
      heart1.trash.remove();
      litterbug2.litterbug.remove();
      litterbug3.litterbug.remove();
      litterbug2 = null;
      litterbug3 = null;

      trash = new Trash(4.25);
      trash.setImage(lightBulb);

      trash2 = new Trash(3.33);
      trash2.setImage(fishBones);

      trash3 = new Trash(2.24);
      trash3.setImage(glassBottle);

      trash4 = new Trash(1.11);
      trash4.setImage(can);

      trash5 = new Trash(1.2);
      trash5.setImage(appleCore);

      trash6 = new Trash(1.3);
      trash6.setImage(bananaPeel);

      trash7 = new Trash(1.4);
      trash7.setImage(glassBottle);

      trash8 = new Trash(1.5);
      trash8.setImage(trashBag);

      trashcanL1 = new Trashcan(6.2, 0);
      trashcanL1.setImage(trashcanImage);

      heart1 = new Heart(6.2, 0);
      heart1.setImage(healthImage);

      // Litterbug
      litterbug4 = new Litterbug(0.50, 2.60);
      litterbug4.setIdleImages(LB_IdleRight, LB_IdleLeft);
      litterbug4.setWalkingAnimations(LB_RwalkingAnimation, LB_LwalkingAnimation);

      // Litterbug 2
      litterbug5 = new Litterbug(3.5, 5.00);
      litterbug5.setIdleImages(LB_IdleRight, LB_IdleLeft);
      litterbug5.setWalkingAnimations(LB_RwalkingAnimation, LB_LwalkingAnimation);

      // Litterbug 3


      // Litterbug 4

      init++;
    }

    /**
     * This is the start of level 3 draw frames
     **/

    // Draw background to avoid shadows
    background.draw();

    if (cityDay.isPlaying() == false) {
      cityDay.play();
    }

    // Draw the game background
    gameGround.draw();

    if (litterbug4.health > 0) {
      tommy.checkCollisions(litterbug4);
    }

    if (litterbug5.health > 0) {
      tommy.checkCollisions(litterbug5);
    }

    //Litterbug function calls
    if (litterbug4.health != 0) {
      litterbug4.patrol();
    } else if (litterbug4.health == 0) {
      counter++;
    }
    if (counter == 2) {
      litterbugDeath.play();
      counter--;
    }

    //Litterbug2 function calls
    if (litterbug5.health != 0) {
      litterbug5.patrol();
    } else if (litterbug5.health == 0) {
      counter++;
    }
    if (counter == 2) {
      litterbugDeath.play();
      counter--;
    }

    // Check against collisions and draw times
    tommy.handleJumping();
    if (litterbug4.health > 0) {
      tommy.checkCollisions(litterbug4);
    }
    if (litterbug5.health > 0) {
      tommy.checkCollisions(litterbug5);
    }

    //Trash function calls
    trash.checkCollisions(tommy);
    trash2.checkCollisions(tommy);
    trash3.checkCollisions(tommy);
    trash4.checkCollisions(tommy);
    trash5.checkCollisions(tommy);
    trash6.checkCollisions(tommy);
    trash7.checkCollisions(tommy);
    trash8.checkCollisions(tommy);
    trashcanL1.checkCollisions(tommy);
    heart1.checkCollisions(tommy);

    // Handle keys
    keyHandler.handleKeyPress();

    // handle Melee
    tommy.handleMelee();

    // Draw all sprites
    drawSprites();

  }
}
