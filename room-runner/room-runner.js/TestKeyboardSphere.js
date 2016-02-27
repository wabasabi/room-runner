// Test sphere that moves around on its own
function TestKeyboardSphere() {
  this.centerX = width / 2;
  this.centerY = height / 2;
  this.x = 0;
  this.y = 0;
  this.angle = 0;
  this.speed = 0.017;
  this.sphereColor = color('#0A0');
  this.dimXY = height / 6;
  this.scalar = height / 2 - (this.dimXY / 2);

  this.isJumping = false;
  this.isFalling = false;

  this.draw = function() {
    this.x = this.centerX + cos(this.angle) * this.scalar;
    this.y = this.centerY + sin(this.angle) * this.scalar;
    fill(this.sphereColor);
    ellipse(this.x, this.y, this.dimXY, this.dimXY);
    
    image(TT_Idle, this.x - 35, this.y - 45);

    if (this.isJumping) {
      this.scalar = this.scalar - 7;
      if (this.scalar < height / 3) {
        this.isJumping = false;
        this.isFalling = true;
      }
    }

    if (this.isFalling) {
      this.scalar = this.scalar + 7;
      this.isJumping = false;
      if (this.scalar > height / 2 - (this.dimXY / 2)) {
        this.isFalling = false;
      }
    }
  }

  this.moveRight = function() {
    this.angle = this.angle - this.speed;
    // Added to test animation
    animation(walkingAnimation, this.x, this.y);
  }

  this.moveLeft = function() {
    this.angle = this.angle + this.speed;
    animation(walkingAnimation, this.x, this.y);
  }

  this.jump = function() {
    this.isJumping = true;
  }
}
