// Generate the ellipse that will project onto the dome
function GameGround() {
  this.x = height;
  this.y = height;
  this.gameGroundColor = color('#FFF');
  this.debugGameGround = new DebugBackground();

  this.draw = function() {
    fill(this.gameGroundColor);
    ellipse(width / 2, height / 2, this.x, this.y);
    
    // If debugging is on, also display the background
    this.debugGameGround.draw();
  }
}
