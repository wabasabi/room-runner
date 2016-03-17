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
    this.walkingRight = true;
    this.tommy.changeAnimation("WalkingLeft");
    this.angle += this.speed;
    this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.tommy.rotation += this.spin;
    this.resetRotation();
  }

  this.MoveLeft = function() {
    this.walkingLeft = true;
    this.tommy.changeAnimation("WalkingRight");
    this.angle -= this.speed;
    this.tommy.position.x = round(this.centerX + cos(this.angle) * this.scalar);
    this.tommy.position.y = round(this.centerY + sin(this.angle) * this.scalar);
    this.tommy.rotation -= this.spin;
    this.resetRotation();
  }

  this.jump = function() {
    if (this.jumping == true || this.falling == true) {
      // Do nothing
    } else {
      this.jumping = true;
    }
  }

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

  this.setIdleImages = function(image1, image2) {
    this.tommy.addImage("IdleRight", image1);
    this.tommy.addImage("IdleLeft", image2);
  }

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
      print("270");
    }
    if (this.angle > 0.61 && this.angle < 0.72) {
      this.tommy.rotation = 315;
      print("315");
    }
    if (this.angle > 1.54 && this.angle < 1.59) {
      this.tommy.rotation = 360;
      print("360");
    }
    if (this.angle > 2.44 && this.angle < 2.47) {
      this.tommy.rotation = 45;
      print("45");
    }
    if (this.angle > 3.12 && this.angle < 3.17) {
      this.tommy.rotation = 90;
      print("90");
    }
    if (this.angle > 3.92 && this.angle < 3.98) {
      this.tommy.rotation = 135;
      print("135");
    }
    if (this.angle > 4.67 && this.angle < 4.73) {
      this.tommy.rotation - 180;
      print("180");
    }
    if (this.angle > 5.48 && this.angle < 5.55) {
      this.tommy.rotation = 235;
      print("235");
    }
  }
}
