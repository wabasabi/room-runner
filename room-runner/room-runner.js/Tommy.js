// Tommy the trashman
// This is the main sprite class that the player
// controls during normal gameplay.
function Tommy(x, y) {

  // WORK THROUGH WITH THIS EXAMPLE:
  // http://p5play.molleindustria.org/examples/index.html?fileName=sprite4.js#

  // Tommy's other attributes
  this.tommyXYDIM = 100;
  this.centerX = width / 2;
  this.centerY = height / 2;
  this.angle = 0;
  this.scalar = height / 2 - (this.tommyXYDIM / 2);
  this.speed = 1/90;
  this.spin = 0.6;

  // Sprite attribute generation
  this.tommy = createSprite(x, y,
    this.tommyXYDIM, this.tommyXYDIM);

  // Sprite animations, initialized in method
  this.tommy.walkingRight = 0;
  this.tommy.idle = 0;

  // Initial Position
  this.tommy.position.x = this.centerX + cos(this.angle) * this.scalar;
  this.tommy.position.y = this.centerY + sin(this.angle) * this.scalar;
  this.tommy.rotation = 270;

  this.checkCollisions = function(colliders) {
    for (var i = 0; i < colliders.length; i++) {
      this.tommy.collide(colliders[i]);
    }
  }

  this.MoveRight = function() {
    this.angle += this.speed;
    this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.tommy.rotation += this.spin;
    print(this.tommy.position.x);
  }

  this.MoveLeft = function() {
    this.angle -= this.speed;
    this.tommy.position.x = this.centerX + cos(this.angle) * this.scalar;
    this.tommy.position.y = this.centerY + sin(this.angle) * this.scalar;
    this.tommy.rotation -= this.spin;
  }

  // Assign animation functions
  this.setWalkingRightAnimation = function(WRAnimation) {
    this.tommy.walkingRight =
      this.tommy.addAnimation("WalkingRight", WRAnimation);
  }

  this.stopMoving = function(idle) {
    this.tommy.setSpeed(0, 0);
  }

  this.resetRotation = function(){

  }
}
