// Litterbug AI
function Litterbug(patrolStart, patrolEnd) {

  // WORK THROUGH WITH THIS EXAMPLE:
  // http://p5play.molleindustria.org/examples/index.html?fileName=sprite4.js#

  // litterbug's other attributes
  this.litterbugXYDIM = 150;
  this.centerX = width / 2;
  this.centerY = height / 2;
  this.angle = patrolStart;
  this.scalar = height / 2 - (this.litterbugXYDIM / 2) - 10;
  this.speed = 1 / (57.2958 * 2.75);
  this.spin = 0.4;

  this.health = 2;

  // patrolling properties
  this.patrolStart = patrolStart;
  this.patrolEnd = patrolEnd;

  // Sprite attribute generation
  this.litterbug = createSprite(this.angle,
    this.litterbugXYDIM, this.litterbugXYDIM);

  // Sprite animations, initialized in method
  this.litterbug.walkingRight = false;
  this.litterbug.walkingLeft = false;
  this.litterbug.idle = true;
  this.isPatrolingLeft = false;
  this.isPatrolingRight = true;

  // Initial Position
  this.litterbug.position.x = round(this.centerX + cos(this.angle) * this.scalar);
  this.litterbug.position.y = round(this.centerY + sin(this.angle) * this.scalar);
  this.litterbug.rotation = 90;

  this.checkCollisions = function(collider) {
    this.litterbug.collide(collider);
  }

  this.MoveRight = function() {
    this.walkingRight = true;
    this.walkingLeft = false;
    this.litterbug.changeAnimation("WalkingLeft");
    this.angle += this.speed;
    this.litterbug.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.litterbug.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.litterbug.rotation += this.spin;
    this.resetRotation();
  }

  this.MoveLeft = function() {
    this.walkingLeft = true;
    this.walkingRight = false;
    this.litterbug.changeAnimation("WalkingRight");
    this.angle -= this.speed;
    this.litterbug.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.litterbug.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.litterbug.rotation -= this.spin;
    this.resetRotation();
  }

  // Assign animation functions
  this.setWalkingAnimations = function(WRAnimation, LRAnimation) {
    this.litterbug.addAnimation("WalkingRight", WRAnimation);
    this.litterbug.addAnimation("WalkingLeft", LRAnimation);
  }

  this.setIdleImages = function(image1, image2) {
    this.litterbug.addImage("IdleRight", image1);
    this.litterbug.addImage("IdleLeft", image2);
  }

  this.stopMoving = function(idle) {
    this.litterbug.setSpeed(0, 0);
    if (this.walkingLeft == true) {
      this.litterbug.changeImage("IdleRight");
      this.walkingLeft = false;
    } else {
      this.litterbug.changeImage("IdleLeft");
      this.walkingRight = false;
    }
  }

  // Patrol - 0 is 6.27
  this.patrol = function() {

    if(this.health <= 0){
      return;
    }

    if(this.angle <= this.patrolStart){
      this.MoveRight();
    }

    if(this.angle > this.patrolStart && this.angle < this.patrolEnd){
      // Keep moving
      if(this.walkingLeft){
        this.MoveLeft();
      } else {
        this.MoveRight();
      }
    }

    // Switch to walking toward start
    if(this.angle >= this.patrolEnd){
      this.MoveLeft();
    }
  }

  this.resetRotation = function() {
    var x = this.litterbug.position.x;
    var y = this.litterbug.position.y;

    // Reset circle at 2PIr and -2PIr
    if (this.angle > 6.28 || this.angle < -6.28) {
      this.angle = 0;
    }

    // Reset litterbug's angle for viewing in 360 degrees
    if (this.angle > -0.10 && this.angle < 0.05) {
      this.litterbug.rotation = 270;
    }

    // Face litterbug 315 + and -
    if ((this.angle > 0.61 && this.angle < 0.72) ||
      (this.angle > -5.55 && this.angle < -5.48)
    ) {
      this.litterbug.rotation = 315;
    }

    // Face litterbug 360 + and -
    if ((this.angle > 1.54 && this.angle < 1.59) ||
      (this.angle > -4.73 && this.angle < -4.67)
    ) {
      this.litterbug.rotation = 360;
    }

    // Face litterbug 45 + and -
    if ((this.angle > 2.44 && this.angle < 2.47) ||
      (this.angle > -3.98 && this.angle < -3.92)
    ) {
      this.litterbug.rotation = 45;
    }

    // Face litterbug 90 + and -
    if (
      (this.angle > 3.12 && this.angle < 3.17) ||
      (this.angle > -3.17 && this.angle < -3.12)
    ) {
      this.litterbug.rotation = 90;
    }

    // Face litterbug 135 + and -
    if (
      (this.angle > 3.92 && this.angle < 3.98) ||
      (this.angle > -2.47 && this.angle < -2.44)
    ) {
      this.litterbug.rotation = 135;
    }

    // Face litterbug 180 + and -
    if (
      (this.angle > 4.67 && this.angle < 4.73) ||
      (this.angle > -1.59 && this.angle < -1.54)
    ) {
      this.litterbug.rotation = 180;
    }

    // Face litterbug 235 + and -
    if (
      (this.angle > 5.48 && this.angle < 5.55) ||
      (this.angle > -0.72 && this.angle < -0.61)
    ) {
      this.litterbug.rotation = 235;
    }
  }
}
