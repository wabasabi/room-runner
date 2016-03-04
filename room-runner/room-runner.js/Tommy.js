// Test sphere that moves around on its own
function Tommy() {

  // WORK THROUGH WITH THIS EXAMPLE:
  // http://p5play.molleindustria.org/examples/index.html?fileName=sprite4.js#

  // Tommy's other attributes
  this.tommyXYDIM = 100;
  this.angle = 0;
  this.speed = 0.017;
  this.scalar = height / 2 - (this.tommyXYDIM / 2);

  //TMP
  this.direction = 0;

  // x and y coordinates of Tommy
  this.centerX = width / 2;
  this.centerY = height / 2;
  this.x = this.centerX + cos(this.angle) * this.scalar;
  this.y = this.centerY + sin(this.angle) * this.scalar;

  // Sprite attribute generation
  this.tommy = createSprite(this.x, this.y,
    this.tommyXYDIM, this.tommyXYDIM);

  // Sprite animations, initialized in method
  this.tommy.walkingRight = 0;
  this.tommy.idle = 0;
  this.tommy.rotation = 0;

  this.checkCollisions = function(colliders) {
    for (var i = 0; i < colliders.length; i++) {
      this.tommy.collide(colliders[i]);
    }
  }

  // Class-specific/Non-Sprite draw function
  this.drawTommyPosition = function() {
    //this.tommy.position.x = this.centerX + cos(this.angle) * this.scalar;
    //this.tommy.position.y = this.centerY + sin(this.angle) * this.scalar;
    this.tommy.setSpeed(this.speed, this.direction);
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
