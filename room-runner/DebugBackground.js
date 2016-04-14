// This object exists to draw the debug image
//  over the game background when the debug
//  flag is set to true, but not display if false.
function DebugBackground() {
  this.draw = function() {
    // Fading animation "level"
    // Just don't do anything, drawing is done in sketch
    if (currentLevel == 0.5 || currentLevel == 0) {
      return;
    } else if (currentLevel == 1) {
      image(levelOne, (width / 2) - (height / 2), 0, height, height);
    } else if (currentLevel == 2) {
      image(levelTwo, (width / 2) - (height / 2), 0, height, height);
    } else if (currentLevel == 3) {
      image(levelThree, (width / 2) - (height / 2), 0, height, height);
    } else if(currentLevel == 4){
      print("Game is over!");
    } else {
      // Print error by default
      print("Invalid currentLevelValue" + currentLevel);
    }
  }
}
