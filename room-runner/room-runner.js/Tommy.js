// Tommy the trashman
// This is the main sprite class that the player
// controls during normal gameplay.
function Tommy(x, y) {

  // WORK THROUGH WITH THIS EXAMPLE:
  // http://p5play.molleindustria.org/examples/index.html?fileName=sprite4.js#

  // Tommy's other attributes
  this.tommyXYDIM = 100;
  this.angle = 0;
  this.startSpeed = 1;
  //TODO this.speed = 0.017
  this.scalar = height / 2 - (this.tommyXYDIM / 2);

  this.direction = 90;
  this.speed = 1;
  this.turnRate = 0.4;

  // Sprite attribute generation
  this.tommy = createSprite(x, y,
    this.tommyXYDIM, this.tommyXYDIM);

  // TMP auto-movement
  // TODO

  // Sprite animations, initialized in method
  this.tommy.walkingRight = 0;
  this.tommy.idle = 0;
  this.tommy.rotation = 0;

  this.checkCollisions = function(colliders) {
    for (var i = 0; i < colliders.length; i++) {
      this.tommy.collide(colliders[i]);
    }
  }

  this.MoveRight = function() {
    this.speed = this.startSpeed;
    this.tommy.setSpeed(this.speed, this.direction);
    this.direction += this.turnRate;
  }

  this.MoveLeft = function() {
    this.speed = this.startSpeed;
    this.tommy.setSpeed(-this.speed, this.direction);
    this.direction -= this.turnRate;
  }

  // Assign animation functions
  this.setWalkingRightAnimation = function(WRAnimation) {
    this.tommy.walkingRight =
      this.tommy.addAnimation("WalkingRight", WRAnimation);
  }

  this.stopMoving = function(idle) {
      this.tommy.setSpeed(0, 0);
  }
}
