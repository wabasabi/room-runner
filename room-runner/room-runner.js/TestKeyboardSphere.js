// Test sphere that moves around on its own
function TestKeyboardSphere() {
  this.centerX = width/2;
  this.centerY = height/2;
  this.angle = 0;
  this.speed = 0.017;
  this.sphereColor = color('#0A0');
  this.dimXY = height/6;
  this.scalar = height/2 - (this.dimXY/2);
  
  this.isJumping = false;
  
  this.draw = function(){
    var x = this.centerX + cos(this.angle) * this.scalar;
    var y = this.centerY + sin(this.angle) * this.scalar;
    fill(this.sphereColor);
    ellipse(x, y, this.dimXY, this.dimXY);
  }
  
  this.moveRight = function(){
    this.angle = this.angle - this.speed;
  }
  
  this.moveLeft = function(){
    this.angle = this.angle + this.speed;
  }
}