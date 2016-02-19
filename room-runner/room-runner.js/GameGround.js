// Generate the ellipse that will project onto the dome
function GameGround() {
  this.x = height;
  this.y = height;
  this.gameGroundColor = color('#FFF');
  
  this.draw = function(){
    fill(this.gameGroundColor);
    ellipse(width/2, height/2, this.x, this.y);
  }
}
