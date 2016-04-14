/**
 * This class handles all keypresses on each run of the
 * draw loop wtihin sketch.js. This allows us to easily alter
 * the keypress methods and cleans up sketch.js
 **/
function KeyHandler() {

  /**
   * This method will end the splash screen if the correct key is pressed.
   **/
  this.endSplashScreen = function() {
    if (keyWentDown("SPACE")) {
      currentLevel = 0.5;
    }
  }

  this.endFadeScreen = function() {
    if (fadeValue >= 255) {
      currentLevel = 1;
    }
  }

  /**
   * The only useful method in the KeyHandler
   * will check which key was pressed in this frame.
   **/
  this.handleKeyPress = function() {

    // Leftward movement
    if (keyWentDown("LEFT_ARROW")) {}
    if (keyWentUp("LEFT_ARROW")) {
      tommy.stopMoving();
    }
    if (keyDown("LEFT_ARROW")) {
      tommy.MoveLeft();
    }

    // Rightward movement
    if (keyWentDown("RIGHT_ARROW")) {}
    if (keyWentUp("RIGHT_ARROW")) {
      tommy.stopMoving();
    }
    if (keyDown("RIGHT_ARROW")) {
      tommy.MoveRight();
    }

    // Jump movement
    if (keyWentDown("UP_ARROW")) {
      tommy.jump();
    }

    // Melee movement
    if (keyWentDown("SPACE")) {
      tommy.punch();
    }

    // Debug change level
    if (debug) {
      if (keyWentDown("ENTER")) {
        currentLevel = currentLevel + 1;
      }
    }
  }
}
