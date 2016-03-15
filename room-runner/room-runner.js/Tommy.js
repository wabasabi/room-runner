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
  this.speed = 1 / (57.2958 * 1.5);
  this.spin = 0.6;

  // Sprite attribute generation
  this.tommy = createSprite(x, y,
    this.tommyXYDIM, this.tommyXYDIM);

  // Sprite animations, initialized in method
  this.tommy.walkingRight = 0;
  this.tommy.idle = 0;

  // Initial Position
  this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
  this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
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
    this.resetRotation();
  }

  this.MoveLeft = function() {
    this.angle -= this.speed;
    this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.tommy.rotation -= this.spin;
    this.resetRotation();
  }

  // Assign animation functions
  this.setWalkingRightAnimation = function(WRAnimation) {
    this.tommy.walkingRight =
      this.tommy.addAnimation("WalkingRight", WRAnimation);
  }

  this.stopMoving = function(idle) {
    this.tommy.setSpeed(0, 0);
  }

  this.resetRotation = function() {
    var x = this.tommy.position.x;
    var y = this.tommy.position.y;

    // Reset angle
    if (x == 290 && y == 463) {
      this.tommy.rotation = 45;
      print(this.angle);
    }

    if (x == 230 && y == 297) {
      this.tommy.rotation = 90;
    }

    if (x == 324 && y == 105) {
      this.tommy.rotation = 135;
    }

    if (x == 480 && y == 50) {
      this.tommy.rotation = 180;
    }

    if (x == 645 && y == 112) {
      this.tommy.rotation = 235;
    }

    if (x == 730 && y == 300) {
      this.angle = 0;
      this.tommy.rotation = 270;
    }

    if (x == 675 && y == 456) {
      this.tommy.rotation = 315;
    }

    if (x == 489 && y == 550) {
      this.tommy.rotation = 360;
    }
  }
}
