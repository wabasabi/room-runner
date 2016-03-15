/**
 * This class handles all keypresses on each run of the
 * draw loop wtihin sketch.js. This allows us to easily alter
 * the keypress methods and cleans up sketch.js
 **/
function KeyHandler() {

  /**
   * The only useful method in the KeyHandler
   * will check which key was pressed in this frame.
   **/
  this.handleKeyPress = function() {

    // Leftward movement
    if(keyWentDown("LEFT_ARROW")){
      print("Left arrow pressed");
    }
    if(keyWentUp("LEFT_ARROW")){
      print("Lifted left arrow key");
      tommy.stopMoving();
    }
    if(keyDown("LEFT_ARROW")){
      print("Holding left arrow key");
      tommy.MoveLeft();
    }

    // Rightward movement
    if(keyWentDown("RIGHT_ARROW")){
      print("Right arrow pressed");
    }
    if(keyWentUp("RIGHT_ARROW")){
      print("Lifted right arrow key");
      tommy.stopMoving();
    }
    if(keyDown("RIGHT_ARROW")){
      print("Holding right arrow key");
      tommy.MoveRight();
    }

    // Jump movement
    if(keyWentDown("UP_ARROW")){
      print("Player want's to jump");
    }

    // Melee movement

  }
}
