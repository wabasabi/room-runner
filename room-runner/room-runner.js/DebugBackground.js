// This object exists to draw the debug image
//  over the game background when the debug
//  flag is set to true, but not display if false.
function DebugBackground() {
  this.draw = function(){
    if(debug == true){
      image(levelOneSmall, (width/2) - (height/2), 0, height, height);
      image(domeDemoImage, (width/2) - (height/2), 0, height, height);
    } else {
      image(levelOneSmall, (width/2) - (height/2), 0, height, height);
    }
  }
}
