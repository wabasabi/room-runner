// Test sphere that moves around on its own
function TestKeyboardSphere(sphereSpeed, startAngle) {
  this.centerX = width/2;
  this.centerY = height/2;
  this.angle = startAngle;
  this.speed = sphereSpeed;
  this.sphereColor = color('#0A0');
  this.dimXY = height/6;
  this.scalar = height/2 - (this.dimXY/2);
  
  this.draw = function(){
    var x = this.centerX + cos(this.angle) * this.scalar;
    var y = this.centerY + sin(this.angle) * this.scalar;
    fill(this.sphereColor);
    ellipse(x, y, this.dimXY, this.dimXY);
  }
  
  this.moveRight = function(){
    this.angle = this.angle - 0.017;
  }
  
  this.moveLeft = function(){
    this.angle = this.angle + 0.017;
  }
}