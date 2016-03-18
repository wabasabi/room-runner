// Tommy the trashman
// This is the main sprite class that the player
// controls during normal gameplay.
function Tommy(x, y, health) {

  // Constructor
  {
    // Tommy's other attributes
    this.tommyXYDIM = 100;
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.angle = 0;
    this.scalar = height / 2 - (this.tommyXYDIM / 2);
    this.jumpHeight = 0;
    this.speed = 1 / (57.2958 * 1.5);
    this.spin = 0.6;

    // Sprite attribute generation
    this.tommy = createSprite(x, y,
      this.tommyXYDIM, this.tommyXYDIM);

    // Sprite animations, initialized in method
    this.tommy.walkingRight = false;
    this.tommy.walkingLeft = false;
    this.tommy.idle = true;
    this.jumping = false;
    this.falling = false;

    // Set tommy's point attributes for score
    this.totalPickups = 0;
    this.totalRecyclables = 0;
    this.totalTrash = 0;
    this.currentScore = 0;
    this.health = health;
  }

  // Initial Position
  {
    this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.tommy.rotation = 270;
  }

  // Check for collisions against sprites
  this.checkCollisions = function(colliders) {
    for (var i = 0; i < colliders.length; i++) {
      this.tommy.collide(colliders[i]);
    }
  }

  // Move rightward
  this.MoveRight = function() {
    this.walkingRight = true;
    this.tommy.changeAnimation("WalkingLeft");
    this.angle += this.speed;
    this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.tommy.rotation += this.spin;
    this.resetRotation();
  }

  // Move leftward
  this.MoveLeft = function() {
    this.walkingLeft = true;
    this.tommy.changeAnimation("WalkingRight");
    this.angle -= this.speed;
    this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.tommy.rotation -= this.spin;
    this.resetRotation();
  }

  // Start jump state
  this.jump = function() {
    if (this.jumping == true || this.falling == true) {
      // Do nothing
    } else {
      this.jumping = true;
    }
  }

  // Handle tommys vertical state each frame
  this.handleJumping = function() {
    // If tommy is jumping, jump and set jumpHeight each time
    if (this.jumping) {
      this.scalar -= 10;
      this.jumpHeight += 10;
      this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
      this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
      if (this.jumpHeight == 200) {
        this.jumping = false;
        this.falling = true;
      }
    }

    // When max jumpheight is reached, start falling
    if (this.falling) {
      this.scalar += 10;
      this.jumpHeight -= 10;
      this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
      this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
      if (this.jumpHeight == 0) {
        this.falling = false;
      }
    }

    // Stop moving when jumpheight is 0
    if (this.jumpHeight == 0) {
      // this.falling = false
    }
  }

  // Assign animation functions
  this.setWalkingAnimations = function(WRAnimation, LRAnimation) {
    this.tommy.addAnimation("WalkingRight", WRAnimation);
    this.tommy.addAnimation("WalkingLeft", LRAnimation);
  }

  // Assign idle animation images
  this.setIdleImages = function(image1, image2) {
    this.tommy.addImage("IdleRight", image1);
    this.tommy.addImage("IdleLeft", image2);
  }

  // Stop tommy from moving
  this.stopMoving = function(idle) {
    this.tommy.setSpeed(0, 0);
    if (this.walkingLeft == true) {
      this.tommy.changeImage("IdleRight");
      this.walkingLeft = false;
    } else {
      this.tommy.changeImage("IdleLeft");
      this.walkingRight = false;
    }
  }

  // Set tommy's correct orientation
  this.resetRotation = function() {
    var x = this.tommy.position.x;
    var y = this.tommy.position.y;

    // Reset circle at 2PIr and -2PIr
    if (this.angle > 6.28 || this.angle < -6.28) {
      this.angle = 0;
    }

    // Reset Tommy's angle for viewing in 360 degrees
    if (this.angle > -0.10 && this.angle < 0.05) {
      this.tommy.rotation = 270;
    }

    // Face tommy 315 + and -
    if ((this.angle > 0.61 && this.angle < 0.72) ||
      (this.angle > -5.55 && this.angle < -5.48)
    ) {
      this.tommy.rotation = 315;
    }

    // Face tommy 360 + and -
    if ((this.angle > 1.54 && this.angle < 1.59) ||
      (this.angle > -4.73 && this.angle < -4.67)
    ) {
      this.tommy.rotation = 360;
    }

    // Face tommy 45 + and -
    if ((this.angle > 2.44 && this.angle < 2.47) ||
      (this.angle > -3.98 && this.angle < -3.92)
    ) {
      this.tommy.rotation = 45;
    }

    // Face tommy 90 + and -
    if (
      (this.angle > 3.12 && this.angle < 3.17) ||
      (this.angle > -3.17 && this.angle < -3.12)
    ) {
      this.tommy.rotation = 90;
    }

    // Face tommy 135 + and -
    if (
      (this.angle > 3.92 && this.angle < 3.98) ||
      (this.angle > -2.47 && this.angle < -2.44)
    ) {
      this.tommy.rotation = 135;
    }

    // Face tommy 180 + and -
    if (
      (this.angle > 4.67 && this.angle < 4.73) ||
      (this.angle > -1.59 && this.angle < -1.54)
    ) {
      this.tommy.rotation - 180;
    }

    // Face tommy 235 + and -
    if (
      (this.angle > 5.48 && this.angle < 5.55) ||
      (this.angle > -0.72 && this.angle < -0.61)
    ) {
      this.tommy.rotation = 235;
    }
  }
}
