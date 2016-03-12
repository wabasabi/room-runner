// Test sphere that moves around on its own
function Tommy(x, y) {

  // WORK THROUGH WITH THIS EXAMPLE:
  // http://p5play.molleindustria.org/examples/index.html?fileName=sprite4.js#

  // Tommy's other attributes
  this.tommyXYDIM = 100;
  this.angle = 0;
  //TODO this.speed = 0.017
  this.scalar = height / 2 - (this.tommyXYDIM / 2);

  //TMP
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
  //this.tommy.rotateToDirection = true;
  //this.tommy.mirrorY(-1);
  //this.tommy.mirrorX(-1);

  this.checkCollisions = function(colliders) {
    for (var i = 0; i < colliders.length; i++) {
      this.tommy.collide(colliders[i]);
    }
  }

  // Class-specific/Non-Sprite draw function
  this.drawTommyPosition = function() {
    //this.tommy.position.x = this.centerX + cos(this.angle) * this.scalar;
    //this.tommy.position.y = this.centerY + sin(this.angle) * this.scalar;
    //this.tommy.setSpeed(this.speed, this.direction);
  }

  this.debugMoveRight = function() {
    this.tommy.setSpeed(this.speed, this.direction);
    this.direction += this.turnRate;
    print(this.tommy.position.x);
    print(this.tommy.position.y);
  }

  this.debugMoveLeft = function() {
    this.tommy.setSpeed(0, this.direction);
  }

  // Assign animation functions
  this.setWalkingRightAnimation = function(WRAnimation) {
    this.tommy.walkingRight =
      this.tommy.addAnimation("WalkingRight", WRAnimation);
  }

  this.setIdle = function(idle) {
    this.tommy.idle =
      this.tommy.addImage(idle);
  }

  // Keypress functions
  this.moveRight = function() {
    //this.angle = this.angle - this.speed; // Assign right-way movement.
    this.tommy.changeAnimation("WalkingRight"); // Assign walkingAnimation
    this.tommy.mirrorX(1); // Face standard direction
    //this.tommy.rotation -= this.speed;
    this.direction -= 1;
    this.speed = 1;
  }

  this.moveLeft = function() {
    //this.angle = this.angle + this.speed; // Assign right-way movement
    this.tommy.changeAnimation("WalkingRight"); // Assign walkingAnimation
    this.tommy.mirrorX(-1); // Face standard direction
    this.direction += 1;
    this.speed = 1;
    //this.tommy.rotation += this.speed;
  }
}
