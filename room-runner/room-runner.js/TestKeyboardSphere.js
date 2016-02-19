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
  this.isFalling = false;
  
  this.draw = function(){
    var x = this.centerX + cos(this.angle) * this.scalar;
    var y = this.centerY + sin(this.angle) * this.scalar;
    fill(this.sphereColor);
    ellipse(x, y, this.dimXY, this.dimXY);
	
	  if(this.isJumping){
	    this.scalar = this.scalar - 7;
	    if(this.scalar < height/3){
	      this.isJumping = false;
	      this.isFalling = true;
	    }
	  }
	
	  if(this.isFalling){
	    this.scalar = this.scalar + 7;
	    this.isJumping = false;
	    if(this.scalar > height/2 - (this.dimXY/2)){
	      this.isFalling = false;
	    }
	  }
  }
  
  this.moveRight = function(){
    this.angle = this.angle - this.speed;
  }
  
  this.moveLeft = function(){
    this.angle = this.angle + this.speed;
  }
  
  this.jump = function(){
	  this.isJumping = true;
  }
}