// This object exists to draw the debug image
//  over the game background when the debug
//  flag is set to true, but not display if false.
function DebugBackground() {
  this.draw = function(){
    if(debug == true){
      //image(levelOne, (width/2) - (height/2), 0, height, height);
      image(levelOneSmall, (width/2) - (height/2), 0, height, height);
      //image(levelOneSmaller, (width/2) - (height/2), 0, height, height);
      print("Frame");
      //image(domeDemoImage, (width/2) - (height/2), 0, height, height);
    } else {
      // Do nothing
    }
  }
}
