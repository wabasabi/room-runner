// This object exists to draw the debug image
//  over the game background when the debug
//  flag is set to true, but not display if false.
function DebugBackground() {
  this.draw = function() {
    if (debug == true) {
      image(domeDemoImage, (width / 2) - (height / 2), 0, height, height);
    }

    if (currentLevel == 0) {
      image(levelOne, (width / 2) - (height / 2), 0, height, height);
    } else if (currentLevel == 1) {
      image(levelTwo, (width / 2) - (height / 2), 0, height, height);
    } else if (currentLevel == 2) {
      image(levelThree, (width / 2) - (height / 2), 0, height, height);
    } else {
      // Print error by default
      print("Invalid currentLevelValue");
    }
  }
}
